import React from 'react';
import { User, Target, Heart, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Peak Career Academy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2024 with a vision to bridge the gap between academic learning and career success, 
            we're committed to nurturing future leaders and professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Founder Profile */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Pulkit Gupta</h3>
                  <p className="text-blue-700 font-semibold">Founder & Lead Educator</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Pulkit Gupta founded Peak Career Academy with a passion for education and helping 
                  students achieve their academic and professional goals. With fresh perspectives 
                  and modern teaching methodologies, he brings innovative approaches to exam preparation.
                </p>
                <p>
                  His dedication to personalized learning and student success drives the academy's 
                  mission to provide quality education and career guidance. Pulkit believes in 
                  nurturing each student's potential through individual attention and comprehensive support.
                </p>
                
                {/* Achievements */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">2024</div>
                    <div className="text-sm text-gray-600">Academy Founded</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-700">Fresh</div>
                    <div className="text-sm text-gray-600">Teaching Approach</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-8 rounded-2xl">
              <Target className="h-8 w-8 text-orange-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Our Mission</h4>
              <p className="text-blue-100">
                To provide world-class education and career guidance that empowers students 
                to achieve their highest potential and secure their dream careers in today's 
                competitive landscape.
              </p>
            </div>
          </div>

          {/* Right Content - Values & Story */}
          <div className="space-y-8">
            {/* Academy Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Peak Career Academy was born from a simple observation: many talented students 
                  struggle not because of lack of ability, but due to inadequate guidance and 
                  personalized attention.
                </p>
                <p>
                  We recognized that each student has unique strengths, challenges, and career 
                  aspirations. This realization led us to create an academy that focuses on 
                  individual growth, comprehensive preparation, and holistic career development.
                </p>
                <p>
                  As a newly established academy, we're excited to be part of our students' 
                  journey to success, offering not just academic preparation but also the 
                  confidence and skills needed to excel in their chosen careers.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-700">
                <Heart className="h-6 w-6 text-blue-700 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Personalized Care</h4>
                <p className="text-gray-600 text-sm">Every student receives individual attention and customized learning plans.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <BookOpen className="h-6 w-6 text-orange-500 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Quality Education</h4>
                <p className="text-gray-600 text-sm">We maintain high standards in education and career guidance.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <Target className="h-6 w-6 text-green-500 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Goal-Oriented</h4>
                <p className="text-gray-600 text-sm">Our focus is on helping students achieve their academic and career objectives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;