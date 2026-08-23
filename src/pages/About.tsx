import React from 'react';
import { Link } from 'react-router-dom';
import {
  Scale,
  Sparkles,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Heart,
  ArrowRight,
  Lock,
  Cpu,
  Layers
} from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12 pb-16">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <Scale className="w-3.5 h-3.5 text-emerald-600" />
          <span>About CivicAI</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Democratizing Legal & Civic Empowerment
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Bridging the gap between everyday citizens and complicated bureaucratic language through clear, structured AI navigation.
        </p>
      </div>

      {/* 1. THE PROBLEM */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
          The Problem Context
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Why Citizens Leave Their Rights Unclaimed
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Citizens possess strong statutory rights—from rental security deposit protections to consumer refund rules, Right to Information (RTI) access, and welfare scheme subsidies. However, millions of people do not exercise these rights because:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="font-bold text-slate-800">1. Bureaucratic Jargon</span>
            <p className="text-slate-500">Legal clauses and gazette notifications are written in complex language.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="font-bold text-slate-800">2. Scattered Information</span>
            <p className="text-slate-500">Rules are spread across disparate PDFs, circulars, and departmental sites.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="font-bold text-slate-800">3. Action Paralysis</span>
            <p className="text-slate-500">Citizens often do not know which officer to contact or what document to draft.</p>
          </div>
        </div>
      </div>

      {/* 2. OUR 5-STEP CITIZEN METHODOLOGY */}
      <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950 text-white shadow-md space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Core Philosophy
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Understand → Identify → Explain → Guide → Act
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
          CivicAI is deliberately architected not as a generic chat playground, but as a structured legal guidance pipeline:
        </p>

        <div className="space-y-3 text-xs">
          <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-800 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-[11px] flex-shrink-0">1</span>
            <div>
              <span className="font-bold text-white">Understand Problem: </span>
              <span className="text-emerald-200">The citizen describes their situation in plain words without knowing legal terms.</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-800 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-[11px] flex-shrink-0">2</span>
            <div>
              <span className="font-bold text-white">Identify Category: </span>
              <span className="text-emerald-200">AI automatically detects jurisdiction (tenancy, consumer, RTI, civic, workplace).</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-800 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-[11px] flex-shrink-0">3</span>
            <div>
              <span className="font-bold text-white">Explain Simply: </span>
              <span className="text-emerald-200">Translates statutory provisions into plain English with realistic limitations.</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-800 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-[11px] flex-shrink-0">4</span>
            <div>
              <span className="font-bold text-white">Guided Action Plan: </span>
              <span className="text-emerald-200">Supplies a time-sequenced checklist and identifies the designated authority.</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-800 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-[11px] flex-shrink-0">5</span>
            <div>
              <span className="font-bold text-white">Generate Applications: </span>
              <span className="text-emerald-200">Produces customized demand notices, RTI letters, and grievance petitions ready to print or file.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ARCHITECTURE & AI INTEGRATION ROADMAP */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg font-bold text-slate-900">Prototype Architecture</h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          In this frontend prototype, the intelligence layer uses modular response schemas (<code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">AnalysisResponse</code>) that can seamlessly transition to live Gemini LLM APIs, multi-lingual translation, and vector legal document retrieval without modifying UI components.
        </p>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>Citizen Privacy by Design</span>
          </div>
          <p className="leading-relaxed">
            All case bookmarks and drafts are stored locally on your device in browser LocalStorage. No sensitive personal data is transmitted to external tracking servers.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-2">
        <Link
          to="/assistant"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>Start Your First Analysis</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Safety Notice */}
      <DisclaimerBanner />
    </div>
  );
};
