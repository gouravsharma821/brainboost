'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Trusted by Healthcare Professionals
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Supporting Minds, 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Enriching Lives
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              A comprehensive cognitive wellness platform designed specifically for individuals living with dementia and their caregivers. Engage in scientifically-backed brain exercises, track progress, and maintain cognitive health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/register"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Start Your Journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/demo"
                className="inline-flex items-center justify-center bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-blue-300 transition-all"
              >
                Watch Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 font-medium">Secure & Private</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
              <div className="bg-white rounded-2xl p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800">Daily Brain Training</h3>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Active
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-700">Memory Games</span>
                    </div>
                    <span className="text-blue-600 font-bold">85%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-700">Problem Solving</span>
                    </div>
                    <span className="text-purple-600 font-bold">92%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-700">Language Skills</span>
                    </div>
                    <span className="text-pink-600 font-bold">78%</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all">
                  Continue Training
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Cognitive Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform offers a wide range of features designed to support cognitive health and enhance quality of life for individuals with dementia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Brain Training Games</h3>
              <p className="text-gray-600 leading-relaxed">
                Scientifically designed exercises to stimulate memory, attention, and problem-solving skills in an engaging, accessible format.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Progress Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor cognitive performance over time with detailed analytics and visual reports that help you understand improvement trends.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Caregiver Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                Family members and caregivers can monitor progress, receive insights, and stay connected with their loved ones' wellness journey.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Daily Reminders</h3>
              <p className="text-gray-600 leading-relaxed">
                Gentle notifications and reminders help establish consistent routines for medication, exercises, and important daily activities.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Educational Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Access a library of articles, videos, and guides about dementia care, cognitive health, and effective care strategies.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Safe & Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is protected with industry-leading encryption and HIPAA-compliant security measures, ensuring complete privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Families Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from caregivers and families who have experienced the positive impact of MindCare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "MindCare has been a blessing for our family. My mother loves the memory games, and I can easily track her progress. It's given us both peace of mind."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold text-lg">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                  <p className="text-gray-500 text-sm">Caregiver, Boston</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The caregiver dashboard is incredibly helpful. I can see how my father is doing even when I can't be there in person. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-700 font-bold text-lg">JC</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">James Chen</p>
                  <p className="text-gray-500 text-sm">Family Member, Seattle</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "As a healthcare professional, I recommend MindCare to families. The exercises are evidence-based and the interface is user-friendly for seniors."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-700 font-bold text-lg">DR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dr. Rachel Adams</p>
                  <p className="text-gray-500 text-sm">Neurologist, Chicago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join thousands of families who trust MindCare to support their loved ones' cognitive health. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Get Started Free
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent text-white px-10 py-4 rounded-xl text-lg font-semibold border-2 border-white hover:bg-white/10 transition-all"
            >
              Talk to Our Team
            </Link>
          </div>
          <p className="text-white/80 text-sm mt-6">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated on Cognitive Health
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest research, tips, and resources on dementia care and cognitive wellness.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-base"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}