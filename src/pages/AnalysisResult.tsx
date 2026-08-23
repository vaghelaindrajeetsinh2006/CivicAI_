import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileText,
  FileCheck,
  Building,
  CheckSquare,
  Square,
  Copy,
  Printer,
  Bookmark,
  RotateCcw,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Info,
  Calendar,
  AlertCircle,
  Clock,
  Send,
  HelpCircle,
  Home,
  ShoppingCart,
  Gift,
  Building2,
  Briefcase,
  AlertTriangle,
  Scale
} from 'lucide-react';
import { AnalysisResponse, ActionStep } from '../types';
import { storage } from '../utils/storage';
import { mockPredefinedResponses } from '../data/mockResponses';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface AnalysisResultProps {
  onShowToast: (title: string, type?: 'success' | 'info' | 'error', desc?: string) => void;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ onShowToast }) => {
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [expandedDocs, setExpandedDocs] = useState<Record<string, boolean>>({});
  const [expandedRights, setExpandedRights] = useState<Record<string, boolean>>({});
  const [isSaved, setIsSaved] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load current analysis or fallback to default tenant demo
    const current = storage.getCurrentAnalysis();
    if (current) {
      setAnalysis(current);
      // Check if already in saved cases
      const saved = storage.getSavedCases();
      setIsSaved(saved.some((item) => item.id === current.id));
    } else {
      // If user directly browsed to /analysis without input, provide standard Tenant dispute
      const defaultResp = mockPredefinedResponses.tenant;
      setAnalysis(defaultResp);
      storage.setCurrentAnalysis(defaultResp);
    }
  }, []);

  if (!analysis) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Loading your analysis...</h2>
      </div>
    );
  }

  // Toggle step completion
  const toggleStep = (stepNumber: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepNumber]: !prev[stepNumber]
    }));
  };

  // Progress calculation
  const totalSteps = analysis.actionPlan?.length || 4;
  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalSteps) * 100);

  // Save to local storage
  const handleSaveResult = () => {
    if (!analysis) return;
    const success = storage.saveCase(analysis);
    if (success) {
      setIsSaved(true);
      onShowToast('Analysis saved to your bookmarks', 'success', 'You can review it anytime from the top bar.');
    } else {
      onShowToast('Already saved in your bookmarks', 'info');
    }
  };

  // Copy full structured guidance to clipboard
  const handleCopyGuidance = () => {
    if (!analysis) return;
    const summaryText = `CIVICAI CITIZEN GUIDANCE REPORT
-----------------------------------------
Category: ${analysis.category}
Issue: ${analysis.issueBadge}

SUMMARY & EXPLANATION:
${analysis.simpleExplanation}

KEY TAKEAWAY:
${analysis.keyTakeaway}

POSSIBLE RIGHTS:
${analysis.possibleRights.map((r, i) => `${i + 1}. ${r.title} (${r.legalReference || 'General'})\n   ${r.explanation}`).join('\n\n')}

REQUIRED DOCUMENTS:
${analysis.documents.map((d, i) => `${i + 1}. ${d.name}\n   Why needed: ${d.whyUseful}`).join('\n')}

RELEVANT AUTHORITY:
${analysis.authority.name} (${analysis.authority.type})
Recommended Action: ${analysis.authority.recommendedAction}

STEP-BY-STEP ACTION PLAN:
${analysis.actionPlan.map((s) => `[Step ${s.stepNumber}] ${s.title} (${s.timeline || 'Phase'})\n  ${s.description}\n  Tip: ${s.actionableTip || 'N/A'}`).join('\n\n')}

DISCLAIMER:
${analysis.disclaimer}
Generated via CivicAI (Civic & Legal Navigator Prototype)
`;

    navigator.clipboard.writeText(summaryText);
    onShowToast('Guidance summary copied to clipboard', 'success');
  };

  const handlePrint = () => {
    window.print();
  };

  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case 'Tenant Rights':
        return <Home className="w-5 h-5 text-emerald-700" />;
      case 'Right to Information (RTI)':
        return <FileText className="w-5 h-5 text-blue-700" />;
      case 'Consumer Rights':
        return <ShoppingCart className="w-5 h-5 text-amber-700" />;
      case 'Government Schemes':
        return <Gift className="w-5 h-5 text-purple-700" />;
      case 'Civic Issues':
        return <Building2 className="w-5 h-5 text-teal-700" />;
      case 'Workplace Rights':
        return <Briefcase className="w-5 h-5 text-indigo-700" />;
      case 'Government Notices':
        return <AlertTriangle className="w-5 h-5 text-rose-700" />;
      default:
        return <Scale className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 pb-16">
      {/* Top Breadcrumb & Action Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/assistant" className="hover:text-emerald-700 font-medium">
            AI Assistant
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Analysis Results</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={handleSaveResult}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              isSaved
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
            id="btn-save-analysis"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-emerald-700 text-emerald-700' : ''}`} />
            <span>{isSaved ? 'Saved in Bookmarks' : 'Save Result'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopyGuidance}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 text-xs font-semibold transition-colors"
            id="btn-copy-guidance"
          >
            <Copy className="w-3.5 h-3.5 text-slate-500" />
            <span>Copy Guidance</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 text-xs font-semibold transition-colors"
            id="btn-print-report"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print Report</span>
          </button>

          <Link
            to="/assistant"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Start Over</span>
          </Link>
        </div>
      </div>

      {/* 1. ISSUE IDENTIFIED HERO BANNER */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4 print-shadow-none">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
              {getCategoryIcon(analysis.category)}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {analysis.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                  {analysis.issueBadge}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                Citizen Action & Rights Roadmap
              </h1>
            </div>
          </div>

          <div className="text-right text-xs text-slate-400">
            <span>Analyzed on {new Date(analysis.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* User's Original Prompt Reference */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
          <span className="font-semibold text-slate-800">Your Situation: </span>
          <span className="italic font-serif text-slate-700">"{analysis.rawInput}"</span>
        </div>

        {/* Simple Plain Language Explanation */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Simple Plain-Language Explanation
          </h3>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            {analysis.simpleExplanation}
          </p>
          <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/60 text-xs text-emerald-900 flex items-start gap-2">
            <Info className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Key Takeaway: </strong>
              {analysis.keyTakeaway}
            </span>
          </div>
        </div>
      </div>

      {/* 2. TWO-COLUMN GRID: RELEVANT RIGHTS & REQUIRED DOCUMENTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Col A: Possible Rights & Relevant Regulations */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 print-shadow-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Scale className="w-4 h-4" />
              </div>
              <h2 className="font-bold text-base text-slate-900">
                Possible Rights & Protections
              </h2>
            </div>
            <span className="text-[11px] text-slate-400">Non-absolute guidance</span>
          </div>

          <div className="space-y-3">
            {analysis.possibleRights.map((right) => {
              const isExpanded = !!expandedRights[right.id];
              return (
                <div
                  key={right.id}
                  className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-2"
                >
                  <div
                    onClick={() =>
                      setExpandedRights((prev) => ({ ...prev, [right.id]: !prev[right.id] }))
                    }
                    className="flex items-start justify-between gap-2 cursor-pointer"
                  >
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      {right.title}
                    </h4>
                    <button type="button" className="text-slate-400 p-0.5">
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {right.explanation}
                  </p>

                  {right.legalReference && (
                    <div className="text-[11px] text-emerald-800 font-medium bg-emerald-50/80 px-2.5 py-1 rounded inline-block">
                      Statutory Basis: {right.legalReference}
                    </div>
                  )}

                  {isExpanded && right.confidenceNote && (
                    <p className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-100 mt-1">
                      💡 {right.confidenceNote}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Col B: Documents You May Need */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 print-shadow-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <FileCheck className="w-4 h-4" />
              </div>
              <h2 className="font-bold text-base text-slate-900">
                Documents You May Need
              </h2>
            </div>
            <span className="text-[11px] text-slate-400">{analysis.documents.length} items</span>
          </div>

          <div className="space-y-3">
            {analysis.documents.map((doc) => {
              const isExpanded = !!expandedDocs[doc.id];
              return (
                <div
                  key={doc.id}
                  className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-1.5"
                >
                  <div
                    onClick={() =>
                      setExpandedDocs((prev) => ({ ...prev, [doc.id]: !prev[doc.id] }))
                    }
                    className="flex items-start justify-between gap-2 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <h4 className="text-xs font-bold text-slate-900">
                        {doc.name}
                      </h4>
                    </div>
                    {doc.optional && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/70 text-slate-600">
                        Optional
                      </span>
                    )}
                  </div>

                  <div className="pl-6 text-xs text-slate-600">
                    <span className="font-medium text-slate-700">Why useful: </span>
                    <span>{doc.whyUseful}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. RELEVANT AUTHORITY / DEPARTMENT CARD */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 print-shadow-none">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">
                Designated Redressal Forum
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {analysis.authority.name}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowVerifyModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
            id="btn-verify-official-source"
          >
            <span>Verify Official Source</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-medium block text-[11px]">Department Type:</span>
            <span className="font-semibold text-slate-800">{analysis.authority.type}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-medium block text-[11px]">Jurisdiction:</span>
            <span className="font-semibold text-slate-800">{analysis.authority.jurisdiction}</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
            <span className="text-emerald-800 font-medium block text-[11px]">Immediate Next Step:</span>
            <span className="font-semibold text-emerald-950">{analysis.authority.recommendedAction}</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed">
          {analysis.authority.description}
        </p>
      </div>

      {/* 4. STEP-BY-STEP ACTION PLAN */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6 print-shadow-none">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Interactive Roadmap
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Your 4-Step Action Plan
            </h2>
            <p className="text-xs text-slate-500">
              Click checkboxes as you complete each task to monitor your progress.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
            <div className="text-right">
              <span className="text-xs font-bold text-slate-800">{completedCount} of {totalSteps} done</span>
              <span className="text-[10px] text-slate-400 block">{progressPercent}% complete</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 bg-emerald-600 transition-all duration-300"
                style={{ height: `${progressPercent}%`, top: `${100 - progressPercent}%` }}
              ></div>
              <span className="relative z-10 text-xs font-bold text-slate-900">
                {progressPercent}%
              </span>
            </div>
          </div>
        </div>

        {/* Steps List */}
        <div className="space-y-4">
          {analysis.actionPlan.map((step) => {
            const isDone = !!completedSteps[step.stepNumber];
            return (
              <div
                key={step.stepNumber}
                className={`p-5 rounded-2xl border transition-all ${
                  isDone
                    ? 'bg-emerald-50/40 border-emerald-200'
                    : 'bg-white border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <button
                    type="button"
                    onClick={() => toggleStep(step.stepNumber)}
                    className="mt-1 flex-shrink-0 text-slate-400 hover:text-emerald-700 transition-colors focus:outline-none"
                    title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {isDone ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-300 hover:text-slate-400" />
                    )}
                  </button>

                  <div className="flex-1 space-y-2 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center">
                          0{step.stepNumber}
                        </span>
                        <h4
                          className={`text-sm font-bold ${
                            isDone ? 'line-through text-slate-400' : 'text-slate-900'
                          }`}
                        >
                          {step.title}
                        </h4>
                      </div>

                      {step.timeline && (
                        <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded">
                          <Clock className="w-3 h-3" />
                          {step.timeline}
                        </span>
                      )}
                    </div>

                    <p className={`text-xs leading-relaxed ${isDone ? 'text-slate-400' : 'text-slate-600'}`}>
                      {step.description}
                    </p>

                    {step.actionableTip && (
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-start gap-2">
                        <span className="font-semibold text-emerald-700">Pro Tip:</span>
                        <span>{step.actionableTip}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Primary Next Action CTA Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg no-print">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-bold text-base text-white">
              Ready to generate your formal application draft?
            </h3>
            <p className="text-xs text-emerald-100">
              Prepare a ready-to-print legal notice, RTI letter, or civic grievance draft based on this report.
            </p>
          </div>

          <Link
            to={`/generator?type=${analysis.suggestedDraftType || 'general_notice'}&ref=${analysis.id}`}
            className="px-6 py-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs sm:text-sm shadow flex items-center gap-2 flex-shrink-0 transition-all"
            id="btn-generate-application-cta"
          >
            <FileText className="w-4 h-4 text-emerald-700" />
            <span>Generate Document Draft</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Safety Notice */}
      <DisclaimerBanner />

      {/* Official Source Verification Modal */}
      {showVerifyModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 no-print animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Building className="w-4 h-4 text-emerald-600" />
                <span>Verify Official Department Guidelines</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowVerifyModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              In this prototype environment, official government portal submission integrations are simulated. Always ensure you cross-check local rules with the designated statutory authority:
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="font-bold text-slate-800">{analysis.authority.name}</div>
              <div className="text-slate-600">{analysis.authority.description}</div>
              {analysis.authority.officialPortalUrl && (
                <a
                  href={analysis.authority.officialPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-semibold inline-flex items-center gap-1 hover:underline pt-1"
                >
                  <span>Visit {analysis.authority.officialPortalUrl}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowVerifyModal(false)}
                className="px-4 py-2 rounded-lg bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
