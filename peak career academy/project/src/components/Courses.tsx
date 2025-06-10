import React from 'react';
import { BookOpen, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface CoursesProps {
  setActiveSection: (section: string) => void;
}

const Courses: React.FC<CoursesProps> = ({ setActiveSection }) => {
  const courses = [
    {
      id: 'mba',
      title: 'MBA Preparation',
      description: 'Comprehensive preparation for MBA entrance exams including CAT, MAT, XAT, and GMAT',
      duration: '6-12 months',
      batchSize: '15-20 students',
      features: [
        'Quantitative Aptitude & Data Interpretation',
        'Logical Reasoning & Critical Thinking',
        'Verbal Ability & Reading Comprehension',
        'Group Discussion & Personal Interview',
        'Mock Tests & Performance Analysis'
      ],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      popular: true
    },
    {
      id: 'bba',
      title: 'BBA Foundation',
      description: 'Complete preparation for BBA entrance exams and undergraduate business programs',
      duration: '4-6 months',
      batchSize: '20-25 students',
      features: [
        'Business Fundamentals',
        'Mathematics & Statistics',
        'English & Communication Skills',
        'General Knowledge & Current Affairs',
        'Interview Preparation'
      ],
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg'
    },
    {
      id: 'bcom',
      title: 'BCom & Commerce',
      description: 'Specialized coaching for commerce entrance exams and career guidance',
      duration: '3-6 months',
      batchSize: '25-30 students',
      features: [
        'Accounting Principles',
        'Business Mathematics',
        'Economics Fundamentals',
        'Business Studies',
        'Career Path Guidance'
      ],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg'
    },
    {
      id: 'science',
      title: 'BSc & MSc Programs',
      description: 'Preparation for science entrance exams and research-oriented careers',
      duration: '4-8 months',
      batchSize: '15-20 students',
      features: [
        'Subject-specific Preparation',
        'Research Methodology',
        'Laboratory Skills',
        'Academic Writing',
        'Career in Research & Industry'
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive preparation programs designed to help you excel in competitive exams 
            and achieve your career goals with confidence.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              {/* Course Image */}
              <div className="relative h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
              </div>

              {/* Course Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>

                {/* Course Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-700" />
                    <span className="text-sm text-gray-700">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-700" />
                    <span className="text-sm text-gray-700">{course.batchSize}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setActiveSection('contact')}
                  className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center group"
                >
                  Get Course Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Courses?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures you're not just prepared for exams, 
              but equipped for long-term career success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Faculty</h4>
              <p className="text-gray-600">Learn from experienced educators with proven track records</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Small Batches</h4>
              <p className="text-gray-600">Personalized attention with limited batch sizes</p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-gray-600">95% success rate with students achieving top ranks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;