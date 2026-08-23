import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  FileText,
  Gift,
  FileCheck,
  CheckCircle2,
  HelpCircle,
  Scale,
  Users,
  Building,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const Home: React.FC = () => {
  const [quickProblemText, setQuickProblemText] = useState('');
  const navigate = useNavigate();

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickProblemText.trim()) {
      navigate(`/assistant?q=${encodeURIComponent(quickProblemText.trim())}`);
    } else {
      navigate('/assistant');
    }
  };

  const sampleScenarios = [
    {
      title: 'Rental Deposit Dispute',
      category: 'Tenant Rights',
      icon: '🏠',
      text: 'My landlord has not returned my ₹40,000 security deposit after 2 months of moving out.',
      link: '/assistant?q=' + encodeURIComponent('My landlord has not returned my security deposit after 2 months of vacating the flat.')
    },
    {
      title: 'Municipal Road Spending',
      category: 'RTI',
      icon: '📋',
      text: 'I want to know the budget, contractor, and timeline for road repair in my ward.',
      link: '/assistant?q=' + encodeURIComponent('I want information about road construction expenditure in my village.')
    },
    {
      title: 'Warranty Service Denial',
      category: 'Consumer Rights',
      icon: '🛒',
      text: 'My newly purchased washing machine broke down in 15 days, but the seller refuses refund.',
      link: '/assistant?q=' + encodeURIComponent('I have a consumer complaint regarding a defective appliance that broke in 15 days.')
    },
    {
      title: 'Govt Housing Subsidy',
      category: 'Welfare Schemes',
      icon: '🎁',
      text: 'Can our family qualify for the PM Awas Yojana housing construction subsidy?',
      link: '/schemes'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-12 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gradient-to-tr from-emerald-100/50 via-teal-50/40 to-slate-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>AI for Civic & Legal Empowerment</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Understand Your Rights. <br className="hidden sm:inline" />
            <span className="text-emerald-700">Take the Right Action.</span>
          </h1>

          {/* Supporting Subtext */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            AI-powered guidance that turns complex civic, legal, and government information into simple, plain-language steps anyone can follow.
          </p>

          {/* Interactive Direct Problem Launcher */}
          <div className="max-w-2xl mx-auto pt-2">
            <form
              onSubmit={handleQuickSubmit}
              className="p-2 sm:p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row items-center gap-2.5 transition-all focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-100"
            >
              <input
                type="text"
                value={quickProblemText}
                onChange={(e) => setQuickProblemText(e.target.value)}
                placeholder="Describe your problem in your own words (e.g. landlord won't refund deposit...)"
                className="w-full px-4 py-2.5 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 bg-transparent border-none focus:outline-none"
                id="hero-quick-problem-input"
              />
              <button
                type="submit"
                className="w-full sm:w-auto flex-shrink-0 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
                id="hero-quick-submit-button"
              >
                <span>Analyze Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 pt-3 text-xs text-slate-500">
              <span>Try:</span>
              <button
                type="button"
                onClick={() => setQuickProblemText('My landlord has not returned my security deposit after 2 months')}
                className="text-emerald-700 hover:underline"
              >
                Deposit refund
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => setQuickProblemText('I want to file an RTI for road repair expenditure')}
                className="text-emerald-700 hover:underline"
              >
                File an RTI
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => setQuickProblemText('Consumer complaint for defective phone refusing replacement')}
                className="text-emerald-700 hover:underline"
              >
                Warranty dispute
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/assistant"
              className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-sm transition-all flex items-center gap-2"
              id="hero-primary-cta"
            >
              <span>Start with Your Problem</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/rights"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm transition-all"
              id="hero-secondary-cta"
            >
              Explore Your Rights
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST / VALUE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2 hover:border-emerald-200 transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Simple</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Understand complicated legal notices and government acts translated into clear, everyday language.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2 hover:border-emerald-200 transition-all">
            <div className="w-10 h-10 rounded-lg bg-teal-100/70 text-teal-800 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Guided</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Get an actionable, step-by-step roadmap showing which department to approach and what to say.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2 hover:border-emerald-200 transition-all">
            <div className="w-10 h-10 rounded-lg bg-indigo-100/70 text-indigo-800 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Citizen-First</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Built specifically for everyday civil disputes, housing issues, public schemes, and civic services.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2 hover:border-emerald-200 transition-all">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Accessible & Free</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No expensive fees or login hurdles. Empowering citizens with transparent legal knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* 3. QUICK ACTION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Specialized Citizen Tools
          </h2>
          <p className="text-sm text-slate-600">
            Select a specialized tool or use the general AI Assistant to analyze any situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: RTI Assistant */}
          <Link
            to="/rti"
            className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between"
            id="quick-card-rti"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors">
                  RTI Assistant
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Turn a simple question into a formatted, statutory Right to Information application draft.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Draft an RTI</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Card 2: Rights Navigator */}
          <Link
            to="/rights"
            className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between"
            id="quick-card-rights"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors">
                  Rights Navigator
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Explore protections, statutory laws, and resolution pathways for tenancy, consumer, and civic rights.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Browse Rights</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Card 3: Scheme Eligibility */}
          <Link
            to="/schemes"
            className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between"
            id="quick-card-schemes"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors">
                  Scheme Eligibility
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Discover whether you qualify for major central and state government housing, health, and welfare schemes.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Check Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Card 4: Document Explainer */}
          <Link
            to="/documents"
            className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between"
            id="quick-card-documents"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors">
                  Document Explainer
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Decode government notices, demand letters, and complex contracts into simple, clear takeaways.
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Explain a Document</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* 4. VISUAL 5-STEP HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              From Confusion to Action in 5 Steps
            </h2>
            <p className="text-sm text-slate-400">
              How CivicAI guides you from an initial grievance to resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono font-bold text-sm flex items-center justify-center">
                01
              </div>
              <h3 className="font-semibold text-sm text-white">Describe Problem</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tell us your situation in plain words without legal jargon.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono font-bold text-sm flex items-center justify-center">
                02
              </div>
              <h3 className="font-semibold text-sm text-white">AI Understands</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Identifies category, jurisdiction, and relevant regulations.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono font-bold text-sm flex items-center justify-center">
                03
              </div>
              <h3 className="font-semibold text-sm text-white">Rights & Documents</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Explains applicable rights and required evidence checklist.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono font-bold text-sm flex items-center justify-center">
                04
              </div>
              <h3 className="font-semibold text-sm text-white">Action Plan</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Provides a time-sequenced roadmap with official departments.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono font-bold text-sm flex items-center justify-center">
                05
              </div>
              <h3 className="font-semibold text-sm text-white">Take Action</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Generate formal notices, draft letters, or register grievances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMON CITIZEN SCENARIOS (DEMO SHOWCASE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Real-World Examples
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Common Situations Solved
            </h2>
          </div>
          <Link
            to="/assistant"
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <span>Try custom problem</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleScenarios.map((scenario, index) => (
            <Link
              key={index}
              to={scenario.link}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xl">{scenario.icon}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {scenario.category}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                  {scenario.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  "{scenario.text}"
                </p>
              </div>

              <div className="pt-4 flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                <span>Test this scenario</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-emerald-800 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to resolve your civic or legal challenge?
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm">
              Type your question in plain words. No legal knowledge required.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/assistant"
              className="px-6 py-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-sm shadow transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Launch AI Assistant</span>
            </Link>
            <Link
              to="/resources"
              className="px-6 py-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-600 text-white font-medium text-sm transition-all"
            >
              Browse Public Portals
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto px-4">
        <DisclaimerBanner />
      </div>
    </div>
  );
};
