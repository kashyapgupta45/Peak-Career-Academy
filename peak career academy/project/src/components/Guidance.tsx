import React from 'react';
import { MessageCircle, Briefcase, Users, TrendingUp, CheckCircle2, BookOpen } from 'lucide-react';

interface GuidanceProps {
  setActiveSection: (section: string) => void;
}

const Guidance: React.FC<GuidanceProps> = ({ setActiveSection }) => {
  const services = [
    {
      icon: MessageCircle,
      title: 'Mock Interviews',
      description: 'Realistic interview simulations with detailed feedback and improvement strategies',
      features: [
        'Industry-specific interview scenarios',
        'Body language and communication coaching',
        'Technical and behavioral question practice',
        'Personalized feedback sessions'
      ]
    },
    {
      icon: Briefcase,
      title: 'Career Counseling',
      description: 'Personalized career guidance based on your interests, skills, and market trends',
      features: [
        'Career path exploration',
        'Industry trend analysis',
        'Skill gap assessment',
        'Long-term career planning'
      ]
    },
    {
      icon: Users,
      title: 'Soft Skills Training',
      description: 'Develop essential soft skills that employers value in today\'s competitive market',
      features: [
        'Communication and presentation skills',
        'Leadership and teamwork',
        'Time management and productivity',
        'Confidence building exercises'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Resume & Portfolio',
      description: 'Professional resume writing and portfolio development services',
      features: [
        'ATS-optimized resume creation',
        'LinkedIn profile optimization',
        'Portfolio development guidance',
        'Personal branding strategies'
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Interview & Career Guidance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond exam preparation, we provide comprehensive career guidance and interview coaching 
            to ensure you're ready for the professional world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-700 p-3 rounded-xl flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Our Approach Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in providing personalized guidance that helps students build confidence 
              and develop the skills needed for career success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                  alt="Personalized guidance"
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Personalized Guidance</h4>
              <p className="text-gray-600 text-sm">Individual attention tailored to each student's unique needs and goals</p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                  alt="Modern methods"
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Modern Methods</h4>
              <p className="text-gray-600 text-sm">Fresh teaching approaches and contemporary career guidance techniques</p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                  alt="Practical focus"
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Practical Focus</h4>
              <p className="text-gray-600 text-sm">Real-world application of skills and knowledge for immediate impact</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't let opportunities pass by. Get expert guidance and personalized coaching 
            to prepare for your dream career and build the confidence you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('contact')}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Book Free Career Consultation
            </button>
            <button
              onClick={() => setActiveSection('courses')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-200"
            >
              Explore Our Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidance;