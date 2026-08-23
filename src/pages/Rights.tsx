import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Scale,
  Home,
  ShoppingCart,
  FileText,
  Building2,
  Briefcase,
  AlertTriangle,
  Search,
  ArrowRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  FileCheck,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { rightsCategories } from '../data/rightsData';
import { RightCategoryItem } from '../types';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const Rights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(rightsCategories[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const currentCategory =
    rightsCategories.find((c) => c.id === selectedCategory) || rightsCategories[0];

  const filteredCategories = rightsCategories.filter((c) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.commonProblems.some((p) => p.toLowerCase().includes(q)) ||
      c.coreRights.some((r) => r.title.toLowerCase().includes(q) || r.detail.toLowerCase().includes(q))
    );
  });

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return <Scale className="w-5 h-5" />;
    }
  };

  const handleAskAI = (queryText: string) => {
    navigate(`/assistant?q=${encodeURIComponent(queryText)}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
          <span>Citizen Rights Directory</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Rights Navigator
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Understand statutory protections, legal standards, standard documentation, and resolution paths across everyday domains.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search rights (e.g. security deposit, warranty, RTI 30-day rule, salary...)"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 shadow-xs"
          />
        </div>
      </div>

      {/* Category Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {filteredCategories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                isSelected
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className={isSelected ? 'text-white' : 'text-emerald-700'}>
                {getCategoryIcon(cat.iconName)}
              </span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Category Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Rights, Meaning & Statutory Framework */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                {getCategoryIcon(currentCategory.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {currentCategory.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {currentCategory.name}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {currentCategory.description}
            </p>

            {/* Direct Ask AI Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
              <div className="text-xs text-emerald-950">
                <span className="font-semibold block">Have a specific dispute in this domain?</span>
                <span className="text-emerald-800">Get a tailored action plan with sample notice drafts.</span>
              </div>
              <button
                type="button"
                onClick={() => handleAskAI(currentCategory.sampleQuery)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs shadow-sm flex items-center justify-center gap-1.5 flex-shrink-0 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ask AI About This</span>
              </button>
            </div>
          </div>

          {/* Key Statutory Rights */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Core Statutory Protections</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentCategory.coreRights.map((right, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {right.section}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">{right.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{right.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Problems in this Domain */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600" />
              <span>Common Situations Faced by Citizens</span>
            </h3>

            <div className="space-y-2">
              {currentCategory.commonProblems.map((prob, idx) => (
                <div
                  key={idx}
                  onClick={() => handleAskAI(prob)}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer flex items-center justify-between text-xs text-slate-800 group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                    <span>{prob}</span>
                  </div>
                  <div className="text-slate-400 group-hover:text-emerald-700 flex items-center gap-1 text-[11px] font-semibold flex-shrink-0">
                    <span>Analyze</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Standard Documents & Resolution Pathway */}
        <div className="space-y-6">
          {/* Documents Commonly Useful */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Standard Evidence Needed</h3>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700">
              {currentCategory.standardDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Standard Resolution Pathway */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-md space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Scale className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-white">Recommended Resolution Flow</h3>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              {currentCategory.resolutionPath.map((step, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 leading-relaxed">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Safety Notice */}
      <DisclaimerBanner />
    </div>
  );
};
