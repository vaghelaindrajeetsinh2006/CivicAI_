import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  HelpCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  Layers,
  FileQuestion,
  Home,
  FileText,
  ShoppingCart,
  Gift,
  Building2,
  Briefcase,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import { analyzeCitizenProblem, analysisStages } from '../utils/mockAI';
import { storage } from '../utils/storage';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const Assistant: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [problemInput, setProblemInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if query was passed via URL parameter (?q=...)
    const initialQuery = searchParams.get('q');
    if (initialQuery) {
      setProblemInput(initialQuery);
    }
    setRecentSearches(storage.getRecentSearches());
  }, [searchParams]);

  const categories = [
    { name: 'All', icon: Sparkles, badge: 'Auto-Detect' },
    { name: 'Tenant Rights', icon: Home, badge: 'Rental' },
    { name: 'Right to Information (RTI)', icon: FileText, badge: 'RTI' },
    { name: 'Consumer Rights', icon: ShoppingCart, badge: 'Consumer' },
    { name: 'Government Schemes', icon: Gift, badge: 'Schemes' },
    { name: 'Civic Issues', icon: Building2, badge: 'Municipal' },
    { name: 'Workplace Rights', icon: Briefcase, badge: 'Labor' },
    { name: 'Government Notices', icon: AlertTriangle, badge: 'Compliance' },
  ];

  const quickPrompts = [
    {
      label: 'Tenant Deposit',
      text: 'My landlord has not returned my security deposit after 2 months of vacating the flat.',
      category: 'Tenant Rights'
    },
    {
      label: 'File an RTI',
      text: 'I want information about road construction expenditure in my village ward.',
      category: 'Right to Information (RTI)'
    },
    {
      label: 'Consumer Complaint',
      text: 'I have a consumer complaint for a defective appliance that broke in 10 days and company denies refund.',
      category: 'Consumer Rights'
    },
    {
      label: 'Scheme Eligibility',
      text: 'Are there any government schemes for low-income families to help with housing subsidy or health insurance?',
      category: 'Government Schemes'
    },
    {
      label: 'Govt Notice / Demolition',
      text: 'I received a show cause notice from the municipal corporation claiming unauthorized construction and threatening penalty.',
      category: 'Government Notices'
    },
    {
      label: 'Unpaid Wages',
      text: 'My employer has withheld my salary for the last 2 months and is threatening termination when I ask.',
      category: 'Workplace Rights'
    }
  ];

  const handlePromptClick = (prompt: { text: string; category: string }) => {
    setProblemInput(prompt.text);
    setSelectedCategory(prompt.category);
    setValidationError(null);
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = problemInput.trim();

    if (!cleanInput) {
      setValidationError('Tell us a little about your problem first.');
      return;
    }

    if (cleanInput.length < 10) {
      setValidationError('Please provide a few more details so the AI can identify your situation accurately.');
      return;
    }

    setValidationError(null);
    setIsAnalyzing(true);
    setCurrentStage(0);

    try {
      storage.addRecentSearch(cleanInput);
      const response = await analyzeCitizenProblem(
        cleanInput,
        selectedCategory === 'All' ? undefined : selectedCategory,
        (stageIndex) => {
          setCurrentStage(stageIndex);
        }
      );

      // Store in storage
      storage.setCurrentAnalysis(response);

      // Navigate to Analysis Result page
      navigate('/analysis');
    } catch (err) {
      console.error(err);
      setIsAnalyzing(false);
      setValidationError('We could not analyze that right now. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8 pb-16">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>AI Civic & Legal Navigator</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          What civic or legal problem are you facing?
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Tell us in your own words. You don't need to know legal terminology or section numbers.
        </p>
      </div>

      {/* Main Analysis Form Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
        {isAnalyzing ? (
          /* Animated AI Processing Loader */
          <div className="p-8 sm:p-14 text-center space-y-8">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-100 animate-ping opacity-30"></div>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 animate-pulse">
                <Sparkles className="w-10 h-10" />
              </div>
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h2 className="text-xl font-bold text-slate-900">
                {analysisStages[currentStage]?.message || 'Analyzing your situation...'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                {analysisStages[currentStage]?.detail}
              </p>
            </div>

            {/* Stepper Progress bar */}
            <div className="max-w-md mx-auto space-y-2">
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStage + 1) / analysisStages.length) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>Stage {currentStage + 1} of 4</span>
                <span>Synthesizing statutory guidelines...</span>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleAnalyze} className="p-6 sm:p-8 space-y-6">
            {/* Category Selector Pills */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Topic Category (Optional)</span>
                </label>
                <span className="text-xs text-slate-500">Auto-detected if left as "All"</span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory === cat.name;
                  return (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        isSelected
                          ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Textarea */}
            <div className="space-y-2">
              <label
                htmlFor="problem-description-input"
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 flex items-center justify-between"
              >
                <span>Describe your situation</span>
                <span className="text-xs font-normal text-slate-400">
                  {problemInput.length} characters
                </span>
              </label>

              <div className="relative">
                <textarea
                  id="problem-description-input"
                  rows={6}
                  value={problemInput}
                  onChange={(e) => {
                    setProblemInput(e.target.value);
                    if (validationError) setValidationError(null);
                  }}
                  placeholder="Example: My landlord hasn't returned my ₹40,000 security deposit after 2 months of moving out. The flat was left in clean condition, but the owner stopped taking calls and won't give an account statement..."
                  className={`w-full p-4 rounded-2xl border text-slate-900 text-sm sm:text-base leading-relaxed placeholder:text-slate-400 focus:outline-none focus:ring-4 transition-all resize-y ${
                    validationError
                      ? 'border-rose-300 ring-rose-100 bg-rose-50/20'
                      : 'border-slate-300 focus:border-emerald-500 focus:ring-emerald-100 bg-white'
                  }`}
                ></textarea>
              </div>

              {/* Friendly Validation Message */}
              {validationError && (
                <div className="flex items-center gap-2 text-xs text-rose-600 font-medium pt-1 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}
            </div>

            {/* Quick Example Prompts */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Click an example to test:</span>
                </span>
                {problemInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setProblemInput('');
                      setSelectedCategory('All');
                    }}
                    className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Clear input</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handlePromptClick(p)}
                    className="text-left p-2.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-emerald-50/60 hover:border-emerald-300 text-slate-700 text-xs transition-all group flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                    <div className="flex-1 min-w-0">
                      <span className="font-semibold text-slate-900 group-hover:text-emerald-800">
                        {p.label}:{' '}
                      </span>
                      <span className="text-slate-600 line-clamp-1">{p.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Simulates structured AI understanding & instant action plan</span>
              </div>

              <button
                type="submit"
                id="btn-analyze-problem-submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Analyze My Problem</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Recent History / Searches */}
      {recentSearches.length > 0 && !isAnalyzing && (
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Recent Queries in this session</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {recentSearches.map((query, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setProblemInput(query)}
                className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs transition-colors truncate max-w-xs"
              >
                "{query}"
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Safety Notice */}
      <DisclaimerBanner />
    </div>
  );
};
