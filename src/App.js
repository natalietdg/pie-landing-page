import React, { useState } from 'react';
import config from './config';

// Product Screenshot Component
const Screenshot = () => {
  return (
    <div className="relative">
      {/* Main Dashboard Container */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="text-sm font-medium text-gray-600">Pie Dashboard</div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 mb-1">Growth Score</div>
              <div className="text-2xl font-bold text-emerald-600">8.4</div>
              <div className="text-xs text-emerald-600">↗ +2.1 this week</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 mb-1">Opportunities</div>
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-xs text-blue-600">3 high-impact</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 mb-1">Users to Target</div>
              <div className="text-2xl font-bold text-purple-600">247</div>
              <div className="text-xs text-purple-600">Ready for outreach</div>
            </div>
          </div>

          {/* AI Insight Card */}
          <div className="bg-gradient-to-r from-[#643aff] to-purple-600 rounded-xl p-6 text-white mb-6 shadow-lg">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">🎯 Top Growth Opportunity</div>
                <div className="text-lg font-semibold mb-2">Export + Collaboration Features</div>
                <div className="text-sm opacity-90">
                  Users who use both features are 3.2x more likely to upgrade to Pro.
                  <span className="font-semibold"> 247 users</span> are perfect candidates.
                </div>
                <button className="mt-3 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  View Target List →
                </button>
              </div>
            </div>
          </div>

          {/* Feature Adoption Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Feature Adoption Impact</h3>
              <div className="text-xs text-gray-500">Last 30 days</div>
            </div>

            {/* Chart Bars */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Export + Collaboration</div>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                  </div>
                  <div className="text-sm font-medium text-emerald-600">3.2x</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Analytics + Alerts</div>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  </div>
                  <div className="text-sm font-medium text-blue-600">2.1x</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Templates + Sharing</div>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-2/5 h-full bg-gradient-to-r from-purple-400 to-purple-600"></div>
                  </div>
                  <div className="text-sm font-medium text-purple-600">1.8x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Cards */}
      <div className="absolute -right-4 -bottom-4 bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-w-xs transform rotate-3 hover:rotate-1 transition-all duration-300">
        <div className="text-xs text-gray-500 mb-1">Recommended Action</div>
        <div className="text-sm font-semibold text-gray-800 mb-2">Create In-App Promotion</div>
        <div className="text-xs text-gray-600 mb-3">Target 247 users with Export + Collaboration combo</div>
        <button className="w-full bg-gradient-to-r from-[#643aff] to-purple-600 text-white text-xs font-medium py-2 rounded-lg hover:opacity-90 transition-opacity">
          Create Campaign
        </button>
      </div>
    </div>
  );
};

export default function PilotLandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ config, env: process.env })
    await fetch(config.GOOGLE_EMAIL_SHEETS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
      },
      body: JSON.stringify({ data: [{ ...formData }] })
    }).then(() => {
      setShowSuccess(true);
    }).catch((error) => {
      console.error("Error adding email to sheet:", error);
    });
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', role: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const faqs = [
    {
      question: "How is this different from Google Analytics and Amplitude?",
      answer: "While Google Analytics shows what happened and Amplitude's AI agents live in a chat tab, Pie integrates AI insights directly into your dashboard - with full transparency into the underlying data."
    },
    {
      question: "What data do I need to connect?",
      answer: "Your user events, business outcomes (successful transactions, failed payments, subscriptions), and feature usage data. We analyze the complete picture to find growth opportunities."
    },
    {
      question: "How long does setup take?",
      answer: "Less than 5 minutes to connect your data. You'll get your first insights within 24 hours."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We use enterprise-grade encryption and never store raw user data - only aggregated insights."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-200/25 to-blue-300/25 rounded-full blur-3xl"></div>
      </div>


      {/* Problem Hook */}
      <div className="text-left text-gray-800 mb-8">
        <div className="text-lg text-center backdrop-blur-sm bg-white/60 rounded-2xl p-6 border border-white/80 shadow-xl">
          Your analytics show <span className="font-semibold text-[#643aff]">feature usage</span>. But <span className="font-semibold text-[#643aff]">which features</span> should you promote to drive growth?
        </div>
      </div>
      <div className="relative z-10 px-4 py-8 sm:px-8 md:px-16 lg:px-[150px] lg:py-16">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 mb-16">
          {/* Left Side - Form and Benefits */}

          <div className="space-y-10 my-auto w-full max-w-2xl mx-auto lg:mx-0">

            {/* Header */}
            <div className="text-left mb-16">
              <div className="inline-block backdrop-blur-sm bg-white/50 border border-white/70 rounded-full px-8 py-3 mb-6 text-sm font-medium shadow-lg text-gray-700">
                🚀 Limited Early Access
              </div>
              <h1
  className="font-bold mb-6 text-black text-left 
    text-4xl sm:text-7xl md:text-7xl lg:text-7xl
    leading-tight sm:leading-[1.1] 
    w-full sm:w-[500px] md:w-[600px] lg:w-[700px]"
>
  Get Early Access to{' '}
  <span className="bg-gradient-to-r from-[#643aff] to-purple-600 bg-clip-text text-transparent text-4xl sm:text-7xl md:text-7xl lg:text-7xl
    leading-tight sm:leading-[1.1] 
    w-full sm:w-[500px] md:w-[600px] lg:w-[700px]">
    Pie
  </span>
</h1>
              <p className="text-xl text-gray-700 max-w-2xl text-left">
                AI-powered growth analysis that discovers cross-feature adoption opportunities and tells you exactly which users to target next.
              </p>
            </div>

          </div>

          {/* Right Side - Product Screenshot */}
          <div
  className="relative w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px]
    mx-auto flex justify-center items-center
    lg:block lg:right-[-26%]"
>
  <Screenshot />
</div>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-center mb-10 gap-8 lg:gap-16 m-0 backdrop-blur-sm bg-white/60 rounded-2xl p-4 sm:p-8 border border-white/80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/70 w-full max-w-5xl mx-auto">

          {/* Benefits Section */}
          <div className='w-full max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-0'>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">Turn Analytics Into Growth</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Most analytics tools show you WHAT happened. Pie tells you WHY it happened and exactly which features to promote to drive adoption.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Discover which features drive retention and revenue growth",
                "Get AI recommendations on which users to target for feature adoption",
                "Turn weeks of data analysis into minutes of actionable growth insights"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-4 sm:p-6 border border-white/60 shadow-lg">
              <div className="text-sm font-medium text-[#643aff] mb-2">Example Insight:</div>
              <div className="text-gray-700 text-sm italic">
                "Users who try Features A + B together are 3x more likely to upgrade. Here are 247 users to target with your in-app promotion."
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full max-w-xl mx-auto lg:mx-0 mt-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">Secure Your Spot</h2>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-700">
              Fill out the form below to join our exclusive pilot program. We'll be in touch within 48 hours.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/70 border border-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all shadow-lg"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/70 border border-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all shadow-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/70 border border-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all shadow-lg"
                >
                  <option value="">Select your role...</option>
                  <option value="founder">Founder/CEO</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="product">Product Manager</option>
                  <option value="growth-data-analyst">Growth/Data Analyst</option>
                  <option value="head-of-growth">Head of Growth</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#643aff] to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-[#5a33e6] hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                Join Pilot Program
              </button>
            </div>

            {showSuccess && (
              <div className="mt-6 p-4 backdrop-blur-sm bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-xl text-center border border-white/70 shadow-lg">
                <span className="text-emerald-700">🎉 Thank you! We'll be in touch within 48 hours.</span>
              </div>
            )}
          </div>
        </div>

        {/* How It Works */}
        <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-4 sm:p-8 border border-white/80 shadow-xl mb-10 hover:shadow-2xl transition-all duration-300 hover:bg-white/70 w-full max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 backdrop-blur-sm bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/60 shadow-lg">
                <svg className="w-8 h-8 text-[#643aff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800">1. Connect Your Data</h3>
              <p className="text-sm sm:text-base text-gray-600">Link your user events and business outcomes in under 5 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 backdrop-blur-sm bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/60 shadow-lg">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">2. Discover Growth Opportunities</h3>
              <p className="text-gray-600">AI finds feature combinations that drive retention and revenue</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 backdrop-blur-sm bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/60 shadow-lg">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Target the Right Users</h3>
              <p className="text-gray-600">Get specific user lists plus AI-recommended product and marketing actions to execute</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-white/80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/70">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/40 pb-4">
                <button
                  className="w-full text-left flex justify-between items-center py-2 text-gray-700 hover:text-[#643aff] transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="mt-2 text-gray-600 pl-4 backdrop-blur-sm bg-white/40 rounded-xl p-4 border border-white/60 shadow-inner">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}