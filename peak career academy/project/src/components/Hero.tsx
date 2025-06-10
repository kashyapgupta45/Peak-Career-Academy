import React from 'react';
import { ArrowRight, Star, Users, BookOpen, Award } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Gateway to 
                <span className="text-orange-400"> Career Excellence</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Peak Career Academy provides comprehensive preparation for MBA, BBA, BCom, BSc, MSc, and other competitive exams with personalized mentoring and career guidance.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">New</div>
                <div className="text-sm text-blue-200">Academy (2024)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">Fresh</div>
                <div className="text-sm text-blue-200">Approach</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">Quality</div>
                <div className="text-sm text-blue-200">Education</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setActiveSection('contact')}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 flex items-center justify-center group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setActiveSection('courses')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Explore Courses
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Students studying together"
                className="w-full h-80 object-cover rounded-xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-orange-500 p-4 rounded-xl shadow-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 p-4 rounded-xl shadow-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Users className="h-8 w-8 text-orange-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personal Mentoring</h3>
            <p className="text-blue-100">One-on-one guidance tailored to your career goals and learning pace.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <BookOpen className="h-8 w-8 text-orange-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Courses</h3>
            <p className="text-blue-100">Complete preparation for MBA, BBA, BCom, BSc, MSc, and more.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Award className="h-8 w-8 text-orange-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
            <p className="text-blue-100">Committed to helping every student achieve their academic and career goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;