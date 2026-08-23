import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  ExternalLink,
  Phone,
  HelpCircle,
  ShieldCheck,
  Building,
  Scale,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import { officialPortals, glossaryTerms, civicFAQs } from '../data/resourcesData';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const Resources: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'portals' | 'glossary' | 'faqs'>('portals');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const filteredPortals = officialPortals.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  const filteredGlossary = glossaryTerms.filter((g) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      g.term.toLowerCase().includes(q) ||
      g.plainEnglish.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q)
    );
  });

  const filteredFAQs = civicFAQs.filter((f) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      f.question.toLowerCase().includes(q) ||
      f.answer.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
          <span>Public Directory & Knowledge Hub</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Citizen Resources & Official Portals
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Access verified government dispute portals, toll-free grievance helplines, bureaucratic glossary, and common civic FAQs.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search portals, legal terms, or FAQs..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 shadow-xs"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 border-b border-slate-200 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab('portals')}
          className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'portals'
              ? 'bg-emerald-800 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Official Government Portals ({officialPortals.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('glossary')}
          className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'glossary'
              ? 'bg-emerald-800 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Bureaucracy Glossary ({glossaryTerms.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('faqs')}
          className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'faqs'
              ? 'bg-emerald-800 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Civic FAQs ({civicFAQs.length})
        </button>
      </div>

      {/* Tab 1: Official Portals Directory */}
      {activeTab === 'portals' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortals.map((portal) => (
            <div
              key={portal.id}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {portal.category}
                  </span>
                  {portal.isPopular && (
                    <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                      National Portal
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base">{portal.name}</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">{portal.department}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {portal.description}
                </p>

                {portal.helpline && (
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="font-medium">{portal.helpline}</span>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Visit Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Glossary */}
      {activeTab === 'glossary' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGlossary.map((term, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-base">{term.term}</h3>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  {term.category}
                </span>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed">
                {term.plainEnglish}
              </p>

              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-950">
                <span className="font-semibold block mb-0.5 text-[11px] text-emerald-800">
                  Example in Context:
                </span>
                <span className="italic font-serif">"{term.exampleInContext}"</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: FAQs */}
      {activeTab === 'faqs' && (
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFAQs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 cursor-pointer transition-all"
                onClick={() => setExpandedFaq(isExpanded ? null : idx)}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <h3 className="font-bold text-sm text-slate-900">{faq.question}</h3>
                  </div>
                  <button type="button" className="text-slate-400 p-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {isExpanded && (
                  <p className="text-xs text-slate-600 leading-relaxed pl-4 pt-2 border-t border-slate-100">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Safety Notice */}
      <DisclaimerBanner />
    </div>
  );
};
