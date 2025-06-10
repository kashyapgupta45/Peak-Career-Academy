import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

interface TestimonialsProps {
  setActiveSection: (section: string) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ setActiveSection }) => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      program: 'MBA Preparation',
      achievement: 'Currently preparing for CAT 2025',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      rating: 5,
      testimonial: 'The personalized guidance from Pulkit sir is exceptional. His fresh teaching approach and individual attention have boosted my confidence significantly. I feel well-prepared for my upcoming exams.',
      year: '2024'
    },
    {
      name: 'Rahul Gupta',
      program: 'BBA Foundation',
      achievement: 'Improved understanding of business concepts',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      rating: 5,
      testimonial: 'Peak Career Academy has transformed my approach to studying. The comprehensive course structure and individual attention have helped me understand concepts I previously struggled with.',
      year: '2024'
    },
    {
      name: 'Anjali Patel',
      program: 'Career Guidance',
      achievement: 'Clear career path identified',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      rating: 5,
      testimonial: 'The career counseling sessions helped me identify my strengths and choose the right career path. The mock interview sessions have been particularly helpful in building my confidence.',
      year: '2024'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Experiences</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our current students about their learning journey with Peak Career Academy 
            and how we're helping them prepare for their future careers.
          </p>
        </div>

        {/* Academy Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-blue-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-700 mb-2">2024</div>
            <div className="text-gray-600">Newly Established</div>
          </div>
          <div className="text-center bg-orange-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-orange-700 mb-2">Fresh</div>
            <div className="text-gray-600">Teaching Methods</div>
          </div>
          <div className="text-center bg-green-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-green-700 mb-2">Personal</div>
            <div className="text-gray-600">Attention</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-blue-700 font-medium">{testimonial.program}</p>
                  <p className="text-sm text-gray-600">{testimonial.achievement}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">({testimonial.year})</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="h-8 w-8 text-blue-700 opacity-20 mb-4" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Future Goals */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Commitment</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              As a newly established academy, we're committed to building a strong foundation 
              of success stories and helping every student achieve their career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">Quality</div>
              <div className="text-blue-100">Education Focus</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">Individual</div>
              <div className="text-blue-100">Attention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">Modern</div>
              <div className="text-blue-100">Teaching Methods</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-orange-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Peak Career Academy and be part of our growing community of dedicated students 
            working towards their career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('contact')}
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center group"
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setActiveSection('courses')}
              className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-200"
            >
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;