import React, { useState } from 'react';
import {
  FileCheck,
  UploadCloud,
  FileText,
  Trash2,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Calendar,
  Building,
  CheckCircle2,
  Info,
  Clock,
  RotateCcw,
  ShieldCheck
} from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface DocumentExplainerProps {
  onShowToast: (title: string, type?: 'success' | 'info' | 'error', desc?: string) => void;
}

export const DocumentExplainer: React.FC<DocumentExplainerProps> = ({ onShowToast }) => {
  const [selectedFile, setSelectedFile] = useState<{ name: string; size: string } | null>({
    name: 'Municipal_ShowCause_Notice_Ward14.pdf',
    size: '1.4 MB'
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResult, setHasResult] = useState(true);
  const [documentPreset, setDocumentPreset] = useState<'municipal' | 'eviction' | 'warranty' | 'tax'>('municipal');

  const samplePresets = [
    {
      id: 'municipal' as const,
      label: 'Municipal Show Cause Notice',
      fileName: 'Notice_Unauth_Balcony_MC_2026.pdf',
      fileSize: '1.2 MB'
    },
    {
      id: 'eviction' as const,
      label: 'Landlord Eviction Letter',
      fileName: 'Tenancy_Termination_Notice.pdf',
      fileSize: '850 KB'
    },
    {
      id: 'warranty' as const,
      label: 'Warranty Denial Letter',
      fileName: 'Service_Center_Rejection_Report.pdf',
      fileSize: '620 KB'
    },
    {
      id: 'tax' as const,
      label: 'Property Tax Penalty Demand',
      fileName: 'Property_Tax_Arrears_Demand.pdf',
      fileSize: '1.8 MB'
    }
  ];

  const handleSelectPreset = (preset: typeof samplePresets[0]) => {
    setDocumentPreset(preset.id);
    setSelectedFile({ name: preset.fileName, size: preset.fileSize });
    setHasResult(true);
    onShowToast(`Sample document "${preset.label}" loaded`, 'info');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      });
      setHasResult(false);
      onShowToast(`Uploaded "${file.name}"`, 'success');
    }
  };

  const handleExplain = () => {
    if (!selectedFile) {
      onShowToast('Please select or upload a document first', 'error');
      return;
    }

    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResult(true);
      onShowToast('Document explained successfully', 'success');
    }, 1200);
  };

  // Mock Result Contents based on preset
  const getParsedContent = () => {
    switch (documentPreset) {
      case 'eviction':
        return {
          title: 'Residential Tenancy Termination & Vacate Demand Notice',
          issuingAuthority: 'Advocate / Authorized Representative of the Property Owner',
          docDate: '12th August 2026',
          deadline: '15 Days from Date of Delivery (Strict Deadline)',
          urgency: 'Medium-High',
          whyReceived: 'The landlord is alleging non-renewal of the rental agreement or intention for self-occupation and demanding physical handover of keys.',
          plainEnglishSummary: 'This is a formal 15-day notice to terminate your lease. However, under standard rent control rules, landlords cannot arbitrarily evict tenants without giving full contractual notice and settling security deposits.',
          actionRequired: 'Review your signed rental agreement notice clause. Prepare a polite written reply asking for mutually agreed move-out timeline and full refund of the security deposit simultaneously on key handover.',
          documentsMentioned: ['Original Rental Deed', 'Payment Receipts', 'Previous Handover Checklists'],
          nextSteps: [
            'Check date of postmark delivery on envelope.',
            'Reply in writing via Speed Post within 7 days stating willingness to vacate upon concurrent return of deposit.',
            'Do not vacate without written acknowledgment of security deposit settlement.'
          ]
        };

      case 'warranty':
        return {
          title: 'Customer Claim Denial & Job-Sheet Inspection Rejection',
          issuingAuthority: 'Authorized Technical Service Center & Brand Manufacturer',
          docDate: '5th August 2026',
          deadline: '30 Days to file Consumer Helpline Dispute',
          urgency: 'Moderate',
          whyReceived: 'The brand claims the product defect is due to "external user damage or voltage fluctuation" to avoid free replacement under manufacturer warranty.',
          plainEnglishSummary: 'The company is trying to evade warranty repair costs by asserting non-covered damage without technical proof. Under Consumer Protection Act 2019, the manufacturer bears the burden of proving user mishandling.',
          actionRequired: 'Do not sign the acceptance of "customer-induced defect". Demand an engineer inspection certificate and escalate to the National Consumer Helpline (1915).',
          documentsMentioned: ['Original Tax Invoice', 'Warranty Card', 'Job-Sheet No. 84920'],
          nextSteps: [
            'Take high-resolution photos of the intact seals and clean physical body.',
            'Send an email to the company Grievance Nodal Officer giving 7 days.',
            'Lodge complaint on consumerhelpline.gov.in / INGRAM.'
          ]
        };

      case 'tax':
        return {
          title: 'Special Property Tax Assessment & Arrears Demand Notice',
          issuingAuthority: 'Municipal Revenue & Property Assessment Department',
          docDate: '1st August 2026',
          deadline: '30 Days from date of dispatch',
          urgency: 'High (Penalties Apply)',
          whyReceived: 'The municipal assessment cell has reassessed unit area property rates and claims retroactive tax arrears for the last 3 financial years.',
          plainEnglishSummary: 'The municipal authority claims you owe overdue property tax plus late interest. In many cases, these notices are computer-generated without crediting previous annual tax receipts.',
          actionRequired: 'Locate past property tax payment receipts (Challans) and file a rectification letter at the Zonal Tax Assessment counter.',
          documentsMentioned: ['Property Index ID / Assessment Number', 'Previous Tax Receipts (Challans)', 'Title Deed'],
          nextSteps: [
            'Compare previous payment challan transaction IDs with the disputed assessment years.',
            'Submit a written representation seeking reconciliation of accounts.',
            'Do not pay retroactive penalties before official verification.'
          ]
        };

      default: // municipal show cause
        return {
          title: 'Show Cause Notice for Alleged Unauthorized Construction (Section 343/344)',
          issuingAuthority: 'Executive Engineer (Building), Municipal Corporation',
          docDate: '15th August 2026',
          deadline: '7 Calendar Days from Physical Receipt',
          urgency: 'Critical / Urgent',
          whyReceived: 'A municipal junior engineer inspection alleges that an alteration (such as balcony weather-shed or internal wall) was made without fresh architectural sanction.',
          plainEnglishSummary: 'The municipal corporation is providing you a statutory opportunity of being heard before taking any adverse sealing or demolition action. They cannot take immediate action until they consider your written reply.',
          actionRequired: 'Submit a point-by-point written reply attaching your approved sanctioned building plan, completion certificate, and requesting a personal hearing with your licensed architect.',
          documentsMentioned: ['Sanctioned Building Plan', 'Completion Certificate / NOC', 'Property Tax Receipts', 'Site Inspection Report'],
          nextSteps: [
            'Draft a formal written reply refuting unauthorized demolition.',
            'Submit in duplicate at the Zonal Inward Counter and secure a stamped acknowledgment.',
            'Keep an enrolled advocate or DLSA contact ready if an emergency stay is required.'
          ]
        };
    }
  };

  const parsed = getParsedContent();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-semibold border border-indigo-200">
          <FileCheck className="w-3.5 h-3.5 text-indigo-600" />
          <span>Document & Notice Explainer</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Don't Understand a Government Document?
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Upload any official notice, demand letter, or legal notice to understand what it says, why you got it, and your deadlines.
        </p>
      </div>

      {/* Preset Test Scenarios Selector */}
      <div className="space-y-2 max-w-3xl mx-auto">
        <div className="flex items-center justify-between text-xs text-slate-600 font-semibold">
          <span>Test with a sample notice:</span>
          <span className="text-slate-400 font-normal">Click any preset to simulate</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {samplePresets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => handleSelectPreset(preset)}
              className={`p-2.5 rounded-xl border text-xs text-left transition-all ${
                documentPreset === preset.id
                  ? 'bg-indigo-50 border-indigo-400 text-indigo-900 font-bold shadow-xs'
                  : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <span className="block truncate">{preset.label}</span>
              <span className="text-[10px] text-slate-400 font-normal">{preset.fileSize}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Upload Zone & Action Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="border-2 border-dashed border-slate-200 hover:border-indigo-400 rounded-2xl p-6 sm:p-8 text-center space-y-3 transition-colors bg-slate-50/50">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
            <UploadCloud className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-sm text-slate-900">
              Drag & Drop your PDF / Notice Image here
            </h3>
            <p className="text-xs text-slate-500">
              Supports PDF, PNG, JPG scans up to 15 MB
            </p>
          </div>

          <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs cursor-pointer transition-all">
            <span>Browse Local Files</span>
            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Selected File Card */}
        {selectedFile && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">
                  {selectedFile.name}
                </h4>
                <p className="text-[11px] text-slate-400">{selectedFile.size} • Ready for analysis</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedFile(null)}
                className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg"
                title="Remove file"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleExplain}
                disabled={isAnalyzing}
                className="px-4 py-2 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-xs shadow flex items-center gap-1.5 transition-all disabled:opacity-50"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isAnalyzing ? 'Analyzing...' : 'Explain Document'}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* AI Parsed Document Output */}
      {hasResult && !isAnalyzing && (
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
            {/* Header */}
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                  Document Breakdown Report
                </span>
                <span className="text-xs text-rose-700 font-semibold flex items-center gap-1 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                  <Clock className="w-3 h-3" />
                  <span>Urgency: {parsed.urgency}</span>
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {parsed.title}
              </h2>
              <p className="text-xs text-slate-500">
                Issued by: <strong>{parsed.issuingAuthority}</strong> • Dated: {parsed.docDate}
              </p>
            </div>

            {/* Critical Deadline Highlight Box */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-xs uppercase tracking-wider block">
                  Critical Response Deadline
                </span>
                <p className="text-sm font-bold mt-0.5">{parsed.deadline}</p>
                <span className="text-xs text-amber-800">
                  Failing to reply within this limitation window may allow the authority to pass an ex-parte order.
                </span>
              </div>
            </div>

            {/* Plain English Explanation */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                What does this document mean in plain English?
              </h3>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                {parsed.plainEnglishSummary}
              </p>
            </div>

            {/* Why might you have received it? */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs space-y-1">
              <span className="font-bold text-slate-800">Why did you receive this?</span>
              <p className="text-slate-600 leading-relaxed">{parsed.whyReceived}</p>
            </div>

            {/* Required Action & Next Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2">
                <span className="font-bold text-indigo-900 block">Action Appears Required:</span>
                <p className="text-slate-700 leading-relaxed">{parsed.actionRequired}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 block">Documents Mentioned in Letter:</span>
                <ul className="space-y-1 text-slate-700">
                  {parsed.documentsMentioned.map((d, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step-by-Step Suggested Steps */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                Recommended Immediate Next Steps
              </h4>
              <div className="space-y-2">
                {parsed.nextSteps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Safety Notice */}
      <DisclaimerBanner />
    </div>
  );
};
