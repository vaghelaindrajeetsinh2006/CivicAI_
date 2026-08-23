import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ShieldAlert, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                <Scale className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">CivicAI</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An AI-powered civic tech and legal empowerment platform translating bureaucratic complexity into simple, actionable steps for everyday citizens.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Civic Tech · Open Public Access · Citizen First</span>
            </div>
          </div>

          {/* Col 2: Core Tools */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4">
              Core Assistants
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/assistant" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  AI Problem Analyzer
                </Link>
              </li>
              <li>
                <Link to="/rights" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Rights Navigator
                </Link>
              </li>
              <li>
                <Link to="/rti" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  RTI Application Drafter
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Scheme Eligibility Reader
                </Link>
              </li>
              <li>
                <Link to="/documents" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Notice / Document Explainer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4">
              Citizen Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/generator" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Legal Notice Generator
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Official Portals Directory
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Civic Glossary & FAQs
                </Link>
              </li>
              <li>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 inline-flex items-center gap-1 transition-colors"
                >
                  <span>NALSA Free Legal Aid</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  How It Works & Ethics
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal / Prototype Notice */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4">
              Project & Standards
            </h3>
            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-1.5 text-amber-400 font-medium">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Prototype Disclaimer</span>
              </div>
              <p className="leading-normal">
                CivicAI provides structured informational guidance. It does not replace certified legal counsel or official government adjudication.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CivicAI. Empowering citizens through accessible legal intelligence.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-400 transition-colors">
              Ethical AI Policy
            </Link>
            <span>•</span>
            <Link to="/about" className="hover:text-slate-400 transition-colors">
              Privacy & Local Storage
            </Link>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for civic empowerment
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
