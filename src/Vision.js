import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Constants
const AI_CHAIN_STAGES = [
  {
    id: 1,
    title: "Event Normalization",
    description: "Clean raw product events into structured, readable behavior",
    isLLM: true,
    position: "top"
  },
  {
    id: 2,
    title: "User Flow Construction", 
    description: "Identify flows and assign lifecycle phase",
    isLLM: false,
    position: "bottom"
  },
  {
    id: 3,
    title: "Pattern Mining",
    description: "Detect which behaviors correlate with outcomes", 
    isLLM: false,
    position: "top"
  },
  {
    id: 4,
    title: "Behavioral Insight Layer",
    description: "Explain why those patterns work (via behavior theory)",
    isLLM: true,
    position: "bottom"
  },
  {
    id: 5,
    title: "Growth Recommendation Engine",
    description: "Suggest actions to PMs & growth teams",
    isLLM: true,
    position: "top"
  }
];

const LIFECYCLE_PHASES = [
  { phase: "Onboarding", timeframe: "Day 0–7", goal: "Show value", role: "Remove blockers" },
  { phase: "Activation", timeframe: "Day 7–30", goal: "Form habits", role: "Reinforce key loops" },
  { phase: "Retained", timeframe: "Day 30+", goal: "Deepen usage", role: "Suggest power paths" },
  { phase: "Churn Risk", timeframe: "Any inactive", goal: "Prevent loss", role: "Trigger interventions" }
];

const ROADMAP_ITEMS = [
  { icon: "🔜", title: "MVP", description: "Behavior-triggered recommendations based on outcome-linked cohorts." },
  { icon: "📊", title: "Short-Term", description: "Plug in real data from test clients. Iterate on segment quality." },
  { icon: "💡", title: "Mid-Term", description: "Close the loop — test interventions, re-analyze outcomes." },
  { icon: "🧠", title: "Long-Term", description: "Pie becomes the behavioral brain of your product stack. A full OS for growth that learns, adapts, and strategizes alongside your team." }
];

const SYSTEM_ITEMS = [
  { title: "Dashboards", subtitle: "Built to aggregate" },
  { title: "LLMs", subtitle: "Good at reasoning across ambiguous data" },
  { title: "ML", subtitle: "Good at detecting patterns" },
  { title: "PMs", subtitle: "Good at applying intuition to context" }
];

export default function App() {
  // Custom hook for intersection observer
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleElements(prev => new Set([...prev, id]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const observeElements = () => {
      document.querySelectorAll('[data-id]').forEach(el => observer.observe(el));
    };

    window.scrollTo(0,0);

    observeElements();

    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // Utility functions
  const getAnimationClasses = (
    isVisible,
    delay,
    type
  ) => {
    const baseClasses = `transition-all duration-1000 ease-out`;
    
    if (type === 'fadeUp') {
      return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`;
    }
    
    if (type === 'fadeLeft') {
      return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`;
    }
    
    if (type === 'scale') {
      return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'}`;
    }
    
    return baseClasses;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-medium text-foreground">Pie</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center relative px-8 pt-20">
        <div className="max-w-6xl mx-auto">
          <div 
            data-id="hero-content"
            className={getAnimationClasses(visibleElements.has('hero-content') || true)}
          >
            <h1 className="text-7xl md:text-7xl lg:text-7xl font-normal mb-16 text-foreground tracking-tight leading-none">
              Our Vision
            </h1>
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-2xl md:text-3xl text-foreground/90 leading-relaxed font-light">
                Pie is building a new behavioral intelligence layer for product growth.
              </p>
              <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed font-light">
                Our vision: empower every team to unlock actionable insights and drive growth with AI.
              </p>
            </div>
          </div>
        </div>
        
        <button 
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-2xl text-foreground/40 hover:text-foreground/60 transition-all duration-300 focus:outline-none"
          onClick={() => scrollToSection('problem')}
          aria-label="Scroll to problem section"
        >
          ↓
        </button>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            data-id="problem-title"
            className={`text-center mb-32 ${getAnimationClasses(visibleElements.has('problem-title'))}`}
          >
            <h2 className="text-5xl md:text-6xl font-normal mb-8 text-foreground tracking-tight leading-tight">
              The Problem with Product Strategy Today
            </h2>
          </div>
          
          <div className="space-y-20">

          <div className='flex flex-row gap-x-[2rem]'>
            <div 
              data-id="problem-1"
              className={`${getAnimationClasses(visibleElements.has('problem-1'))} w-[60%]`}
            >
              <div className="text-left space-y-8">
                <h3 className="text-3xl md:text-4xl text-left font-light text-foreground leading-tight">
                  Dashboard tools tell teams what happened — not why, and definitely not what to do next.
                </h3>
                <p className="text-xl text-foreground/70 leading-relaxed text-left font-light">
                  Most product teams are flying blind with better charts.
                </p>
              </div>
            </div>
            
            <div 
              data-id="problem-2"
              className={`${getAnimationClasses(visibleElements.has('problem-2'), 200)}`}
            >
              <div className="text-left space-y-8">
                <div className="space-y-6 text-xl text-foreground/70 leading-relaxed font-light">
                  <p>You get a chart saying "50% of users churn in week 2."</p>
                  <p>You get a funnel showing drop-off after Feature X.</p>
                  <p className="text-2xl text-foreground font-normal">But then what? You still have to guess what to do about it.</p>
                </div>
              </div>
            </div>
            </div>
            
            <div 
              data-id="problem-3"
              className={`${getAnimationClasses(visibleElements.has('problem-3'), 400)}`}
            >
              <div className="text-left space-y-2">
                <p className="text-xl text-foreground/70 leading-relaxed font-light">
                  Tools like Mixpanel and Amplitude were built for large, instrumented teams with data analysts. 
                  Most teams don't have that luxury.
                </p>
                <p className="text-2xl text-foreground font-normal">
                  They don't need a dashboard — they need a decision layer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-gray-100"></div>

      {/* Core Insight Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            data-id="insight-title"
            className={`text-center mb-32 ${getAnimationClasses(visibleElements.has('insight-title'))}`}
          >
            <h2 className="text-5xl md:text-6xl font-normal mb-2 text-foreground tracking-tight leading-tight">
              Our Core Insight
            </h2>
          </div>
          
          <div className="space-y-20">
            <div 
              data-id="insight-1"
              className={`text-center max-w-5xl mx-auto ${getAnimationClasses(visibleElements.has('insight-1'))}`}
            >
              <h3 className="text-3xl md:text-4xl font-light mb-8 text-foreground leading-tight">
                Retention and growth are behavior problems — not metric problems.
              </h3>
              <p className="text-2xl text-primary font-light">
                Power users don't look the same — they act the same.
              </p>
            </div>
            
            <div 
              data-id="insight-2"
              className={`max-w-5xl mx-auto ${getAnimationClasses(visibleElements.has('insight-2'), 200)}`}
            >
              <div className="text-center space-y-8">
                <h4 className="text-2xl font-normal text-primary">Behavioral Fingerprints</h4>
                <p className="text-xl text-foreground/70 leading-relaxed font-light">
                  The top 20% of retained users at any company share behavioral fingerprints, not demographics. 
                  They click, explore, repeat, or activate in specific ways — and they do it early.
                </p>
              </div>
            </div>
            
            <div 
              data-id="insight-3"
              className={`${getAnimationClasses(visibleElements.has('insight-3'), 400)}`}
            >
              <div className="grid md:grid-cols-2 gap-16 max-w-3xl mx-auto mb-16">
                <div className="text-center py-12">
                  <h5 className="text-xl font-normal mb-4 text-foreground">Metrics</h5>
                  <p className="text-foreground/60 font-light">Describe what's happening</p>
                </div>
                <div className="text-center py-12">
                  <h5 className="text-xl font-normal mb-4 text-foreground">Behavior</h5>
                  <p className="text-foreground/60 font-light">Explains why</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-normal text-primary">
                  Pie is built on this: If we can understand behavior, we can drive outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-gray-100"></div>

      {/* AI Chain Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            data-id="ai-title"
            className={`text-center mb-20 ${getAnimationClasses(visibleElements.has('ai-title'))}`}
          >
            <h2 className="text-5xl md:text-6xl font-normal mb-8 text-foreground tracking-tight leading-tight">
              The 5-Stage AI Chain
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-4xl mx-auto font-light">
              Pie is not "AI for dashboards." It's a behavior engine built on a modular AI stack.
            </p>
          </div>
          
          <div className="space-y-10 mb-20">
            {AI_CHAIN_STAGES.map((stage, index) => (
              <div 
                key={stage.id}
                data-id={`stage-${stage.id}`}
                className={`max-w-5xl mx-auto ${getAnimationClasses(visibleElements.has(`stage-${stage.id}`), index * 100)}`}
              >
                <div className="grid md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-1 flex justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full border border-primary bg-white flex items-center justify-center font-normal text-primary text-lg">
                      {stage.id}
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-2xl font-normal text-foreground">{stage.title}</h3>
                    <p className="text-xl text-foreground/70 leading-relaxed font-light">{stage.description}</p>
                  </div>
                  <div className="md:col-span-3 flex justify-center md:justify-end">
                    <span className={`px-4 py-2 rounded-full text-sm font-normal border ${
                      stage.isLLM 
                        ? 'bg-amber-50 text-amber-700 border-amber-200' 
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}>
                      {stage.isLLM ? 'LLM' : 'Traditional ML'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            data-id="ai-conclusion"
            className={`text-center space-y-8 ${getAnimationClasses(visibleElements.has('ai-conclusion'))}`}
          >
            <div className="space-y-4 text-xl text-foreground/70 font-light">
              <p>You can swap in better event data.</p>
              <p>You can upgrade the pattern miner.</p>
              <p>But this stack doesn't change.</p>
            </div>
            <p className="text-3xl font-normal text-primary">It's the new growth layer.</p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-gray-100"></div>

      {/* Behavioral Lifecycle Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            data-id="lifecycle-title"
            className={`text-center mb-20 ${getAnimationClasses(visibleElements.has('lifecycle-title'))}`}
          >
            <h2 className="text-5xl md:text-6xl font-normal mb-8 text-foreground tracking-tight leading-tight">
              The Behavioral Lifecycle Model
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-5xl mx-auto font-light">
              Different behaviors matter at different stages of the journey. We don't just ask "what did users do?" 
              We ask: "Where were they in the journey when they did it?"
            </p>
          </div>
          
          <div 
            data-id="lifecycle-table"
            className={`${getAnimationClasses(visibleElements.has('lifecycle-table'))}`}
          >
            <div className="bg-white rounded-none overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-8 py-6 text-left font-normal text-foreground text-lg">Phase</th>
                      <th className="px-8 py-6 text-left font-normal text-foreground text-lg">Timeframe</th>
                      <th className="px-8 py-6 text-left font-normal text-foreground text-lg">Goal</th>
                      <th className="px-8 py-6 text-left font-normal text-foreground text-lg">Pie's Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LIFECYCLE_PHASES.map((phase, index) => (
                      <tr 
                        key={index} 
                        className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="px-8 py-6 font-normal text-foreground">{phase.phase}</td>
                        <td className="px-8 py-6 text-foreground/70 font-light">{phase.timeframe}</td>
                        <td className="px-8 py-6 text-foreground/70 font-light">{phase.goal}</td>
                        <td className="px-8 py-6 text-foreground/70 font-light">{phase.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div 
            data-id="lifecycle-conclusion"
            className={`text-center mt-24 ${getAnimationClasses(visibleElements.has('lifecycle-conclusion'))}`}
          >
            <p className="text-2xl font-normal text-primary max-w-4xl mx-auto leading-relaxed">
              You can't solve retention by reacting to churn. You solve it by intervening at the right behavioral moment.
            </p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-gray-100"></div>

      {/* System Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            data-id="system-title"
            className={`text-center mb-20 ${getAnimationClasses(visibleElements.has('system-title'))}`}
          >
            <h2 className="text-5xl md:text-6xl font-normal mb-8 text-foreground tracking-tight leading-tight">
              Why This Needs a New System
            </h2>
          </div>
          
          <div 
            data-id="system-grid"
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 ${getAnimationClasses(visibleElements.has('system-grid'))}`}
          >
            {SYSTEM_ITEMS.map((item, index) => (
              <div
                key={index}
                className="text-center py-12 border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <h3 className="font-normal mb-4 text-foreground text-lg">{item.title}</h3>
                <p className="text-foreground/60 font-light">{item.subtitle}</p>
              </div>
            ))}
          </div>
          
          <div 
            data-id="system-conclusion"
            className={`text-center space-y-6 ${getAnimationClasses(visibleElements.has('system-conclusion'))}`}
          >
            <p className="text-2xl font-normal text-primary">Pie combines all three.</p>
            <p className="text-xl text-foreground/70 font-light">
              This isn't a smarter Mixpanel. It's a new behavioral intelligence layer for product strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-gray-100"></div>

      {/* Roadmap Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            data-id="roadmap-title"
            className={`text-center mb-20 ${getAnimationClasses(visibleElements.has('roadmap-title'))}`}
          >
            <h2 className="text-5xl md:text-6xl font-normal mb-8 text-foreground tracking-tight leading-tight">
              What's Next
            </h2>
          </div>
          
          <div className="space-y-10 mb-20">
            {ROADMAP_ITEMS.map((item, index) => (
              <div 
                key={index}
                data-id={`roadmap-${index}`}
                className={`max-w-5xl mx-auto ${getAnimationClasses(visibleElements.has(`roadmap-${index}`), index * 100)}`}
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-1 flex justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-normal text-foreground">{item.title}</h3>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-xl text-foreground/70 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            data-id="roadmap-conclusion"
            className={`text-center space-y-8 ${getAnimationClasses(visibleElements.has('roadmap-conclusion'))}`}
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-normal text-foreground">We Don't Analyze Time.</h3>
              <h3 className="text-4xl font-normal text-primary">We Analyze Timing in the Journey.</h3>
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-xl text-foreground/70 leading-relaxed font-light">
                If you're a product owner who's tired of dashboards with no next step — we're onboarding early pilot teams.
              </p>
              <p className="text-xl text-foreground/70 leading-relaxed font-light">
                Or if you're a technical builder who wants to shape the future of product intelligence, let's talk.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
              <a href="/#form" className="px-12 py-4 bg-primary text-white font-normal hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]">
                Join our pilot program →
              </a>
              <Link to="https://www.youtube.com/watch?v=sMnoFza6QE8" className="px-12 py-4 border border-gray-300 font-normal text-foreground hover:bg-gray-50 transition-all duration-300">
                See the demo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-foreground/60 font-light">© 2025 Pie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}