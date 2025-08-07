import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vision from './Vision';
import config from './config';

// Product Screenshot Component
const Screenshot = () => {
  return (
    <div className="relative">
      {/* Main Dashboard Container */}
      <div className="bg-white shadow-2xl border border-gray-200 overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-400 "></div>
              <div className="w-3 h-3 bg-yellow-400 "></div>
              <div className="w-3 h-3 bg-green-400 "></div>
            </div>
            <div className="text-sm font-medium text-gray-600">Pie Dashboard</div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 mb-1">Growth Score</div>
              <div className="text-2xl font-bold text-emerald-600">8.4</div>
              <div className="text-xs text-emerald-600">↗ +2.1 this week</div>
            </div>
            <div className="bg-white p-4 shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 mb-1">Opportunities</div>
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-xs text-blue-600">3 high-impact</div>
            </div>
            <div className="bg-white p-4 shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 mb-1">Users to Target</div>
              <div className="text-2xl font-bold text-purple-600">247</div>
              <div className="text-xs text-purple-600">Ready for outreach</div>
            </div>
          </div>

          {/* AI Insight Card */}
          <div className="bg-gradient-to-r from-[#643aff] to-purple-600 p-6 text-white mb-6 shadow-lg">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-white/20  flex items-center justify-center flex-shrink-0">
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
                <button className="mt-3 bg-white/20 hover:bg-white/30 px-4 py-2  text-sm font-medium transition-colors">
                  View Target List →
                </button>
              </div>
            </div>
          </div>

          {/* Feature Adoption Chart */}
          <div className="bg-white p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Feature Adoption Impact</h3>
              <div className="text-xs text-gray-500">Last 30 days</div>
            </div>

            {/* Chart Bars */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Export + Collaboration</div>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200  overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                  </div>
                  <div className="text-sm font-medium text-emerald-600">3.2x</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Analytics + Alerts</div>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200  overflow-hidden">
                    <div className="w-3/5 h-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  </div>
                  <div className="text-sm font-medium text-blue-600">2.1x</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Templates + Sharing</div>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200  overflow-hidden">
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
      <div className="absolute -right-4 -bottom-4 bg-white shadow-lg border border-gray-200 p-4 max-w-xs transform rotate-3 hover:rotate-1 transition-all duration-300">
        <div className="text-xs text-gray-500 mb-1">Recommended Action</div>
        <div className="text-sm font-semibold text-gray-800 mb-2">Create In-App Promotion</div>
        <div className="text-xs text-gray-600 mb-3">Target 247 users with Export + Collaboration combo</div>
        <button className="w-full bg-gradient-to-r from-[#643aff] to-purple-600 text-white text-xs font-medium py-2  hover:opacity-90 transition-opacity">
          Create Campaign
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </Router>
  );
}

export function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    website: '', // Honeypot field
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Rate limiting: prevent submissions within 3 seconds
    const now = Date.now();
    if (now - lastSubmissionTime < 3000) {
      alert('Please wait a moment before submitting again.');
      return;
    }

    // Honeypot check - if filled, it's likely a bot
    if (formData.website) {
      console.log('Bot detected via honeypot');
      return; // Silently reject without alerting the bot
    }
    
    // Basic validation to prevent empty submissions
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Prevent double submissions
    if (isSubmitting) return;

    setIsSubmitting(true);
    setLastSubmissionTime(now);

    try {
      console.log({ config, env: process.env })
      await fetch(config.GOOGLE_EMAIL_SHEETS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        },
        body: JSON.stringify({ data: [{ ...formData, timestamp: new Date().toISOString() }] })
      });

      setShowSuccess(true);
      setFormData({ name: '', email: '', role: '' });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (error) {
      console.error("Error adding email to sheet:", error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between relative">
            <div className="text-2xl font-medium text-foreground relative z-10">Pie</div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-center w-full pointer-events-none">
              <span className="inline-block pointer-events-auto text-foreground/70 font-light">
                Your analytics show <span className="font-medium text-[#643aff]">feature usage</span>. But <span className="font-medium text-[#643aff]">which features</span> should you promote to drive growth?
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-left relative px-8 pt-20 gap-4">
        <div className="max-w-6xl mx-auto">
          <div>
            <div className="inline-block bg-gray-50  px-6 py-2 mb-8 text-sm font-medium text-gray-600">
              🚀 Limited Early Access
            </div>
            <h1 className="text-5xl md:text-5xl lg:text-5xl font-light mb-8 text-foreground tracking-tight leading-tight">
              Get Early Access to{' '}
              <span className="text-[#643aff] text-5xl font-medium">
                Pie
              </span>
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
                AI-powered growth analysis that discovers cross-feature adoption opportunities and tells you exactly which users to target next.
              </p>
            </div>
          </div>
        </div>

        {/* Product Screenshot */}
        <div className="flex justify-center mb-20 text-center">
          <Screenshot />
        </div>

      </section>

      <div className="px-8 py-20">
        <div className="max-w-6xl mx-auto">

          <div>
            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light mb-8 text-foreground tracking-tight leading-tight">
                  Turn Analytics Into Growth
                </h2>
                <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-light max-w-4xl mx-auto">
                  Most analytics tools show you WHAT happened. Pie tells you WHY it happened and exactly which features to promote to drive adoption.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                {[
                  "Discover which features drive retention and revenue growth",
                  "Get AI recommendations on which users to target for feature adoption",
                  "Turn weeks of data analysis into minutes of actionable growth insights"
                ].map((benefit, i) => (
                  <div key={i} className="text-center space-y-4">
                    <div className="w-12 h-12 bg-[#643aff]/10 flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-[#643aff]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg text-foreground/80 font-light leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50  p-8 max-w-4xl mx-auto">
                <div className="text-sm font-medium text-[#643aff] mb-3">Example Insight:</div>
                <p className="text-lg text-foreground/80 font-light italic">
                  "Users who try Features A + B together are 3x more likely to upgrade. Here are 247 users to target with your in-app promotion."
                </p>
              </div>
            </section>

          </div>
          {/* Benefits Section */}


          {/* Form Section */}
          <section className="py-20 bg-gray-50 rounded-3xl">
            <div className="max-w-2xl mx-auto text-center px-8">
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-foreground tracking-tight leading-tight">Secure Your Spot</h2>
              <p className="text-xl text-foreground/70 font-light mb-12">
                Fill out the form below to join our exclusive pilot program. We'll be in touch within 48 hours.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/70">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3  bg-white border border-gray-200 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#643aff]/20 focus:border-[#643aff] transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/70">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3  bg-white border border-gray-200 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#643aff]/20 focus:border-[#643aff] transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/70">Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3  bg-white border border-gray-200 text-foreground focus:outline-none focus:ring-2 focus:ring-[#643aff]/20 focus:border-[#643aff] transition-all"
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
                  disabled={isSubmitting}
                  className={`w-full font-medium py-4 px-6 transition-all duration-300 ${isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-[#643aff] text-white hover:bg-[#5a33e6]'
                    }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Join Pilot Program'}
                </button>
              </div>

              {showSuccess && (
                <div className="mt-6 p-4 bg-emerald-50  text-center border border-emerald-200">
                  <span className="text-emerald-700">🎉 Thank you! We'll be in touch within 48 hours.</span>
                </div>
              )}
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-foreground tracking-tight leading-tight">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#643aff]/10  flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-[#643aff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-foreground">1. Connect Your Data</h3>
                <p className="text-foreground/70 font-light">Link your user events and business outcomes in under 5 minutes</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#643aff]/10  flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-[#643aff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-foreground">2. Discover Growth Opportunities</h3>
                <p className="text-foreground/70 font-light">AI finds feature combinations that drive retention and revenue</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#643aff]/10  flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-[#643aff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-foreground">3. Target the Right Users</h3>
                <p className="text-foreground/70 font-light">Get specific user lists plus AI-recommended product and marketing actions to execute</p>
              </div>
            </div>
          </section>

          {/* Vision CTA */}
          <section className="py-20 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className='text-4xl md:text-5xl font-light text-foreground tracking-tight leading-tight'>🔮 Want to see where this is going?</h3>
              <div className="space-y-4">
                <p className='text-xl text-foreground/80 font-light'>Pie isn't just analytics with AI.</p>
                <p className='text-xl text-foreground/80 font-light'>It's a new behavioral intelligence layer for product growth.</p>
              </div>
              <Link to="/vision" className="inline-block bg-[#643aff] text-white font-medium px-8 py-3  hover:bg-[#5a33e6] transition-all duration-300">
                Read our vision →
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
