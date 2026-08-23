import React, { useState } from 'react';
import {
  FileText,
  Sparkles,
  Copy,
  Printer,
  Download,
  RotateCcw,
  Plus,
  Trash2,
  CheckCircle2,
  Info,
  Building,
  HelpCircle,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { RTIDraftData } from '../types';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface RTIAssistantProps {
  onShowToast: (title: string, type?: 'success' | 'info' | 'error', desc?: string) => void;
}

export const RTIAssistant: React.FC<RTIAssistantProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState<RTIDraftData>({
    applicantName: 'A Citizen of India',
    applicantAddress: '123, Civil Lines, District Center',
    applicantPhone: '9876543210',
    applicantEmail: 'citizen@example.com',
    isBPL: false,
    bplCardNumber: '',
    targetDepartment: 'Public Information Officer (PIO), Municipal Corporation / PWD',
    subject: 'Application seeking information regarding road construction and drainage maintenance expenditure under Section 6(1) of RTI Act 2005',
    informationPoints: [
      'Certified copy of the administrative sanction order, financial allocation, and tender estimate for the road resurfacing completed in Ward 14 during FY 2024-2026.',
      'Name of the selected executing contractor, awarded contract value, and stipulated date of completion.',
      'Copy of the site measurement book extracts and quality inspection test reports submitted by the junior engineer before clearing the contractor bills.',
      'Details of the defect liability guarantee period and penalty clauses applicable for early pothole deterioration.'
    ],
    timePeriod: 'Financial Year 2024 to Present',
    stateOrCentral: 'State Government',
    stateName: 'Local Municipal Body'
  });

  const [customQuestionInput, setCustomQuestionInput] = useState('');
  const [isGenerated, setIsGenerated] = useState(true);

  const handleAddQuestion = () => {
    if (customQuestionInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        informationPoints: [...prev.informationPoints, customQuestionInput.trim()]
      }));
      setCustomQuestionInput('');
      onShowToast('Question added to RTI points', 'info');
    }
  };

  const handleRemoveQuestion = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      informationPoints: prev.informationPoints.filter((_, i) => i !== index)
    }));
  };

  const formattedDraft = `FORM 'A'
APPLICATION FOR SEEKING INFORMATION UNDER SECTION 6(1) OF THE RIGHT TO INFORMATION ACT, 2005

To,
The Public Information Officer (PIO) / Assistant PIO,
${formData.targetDepartment}
${formData.stateName || 'Department Headquarters / Zonal Office'}

1. Full Name of the Applicant: ${formData.applicantName}
2. Address for Correspondence: ${formData.applicantAddress}
3. Contact Details: Phone: ${formData.applicantPhone} | Email: ${formData.applicantEmail}
4. Citizenship: Citizen of India (Under Section 3 of RTI Act, 2005)

5. Subject:
${formData.subject}

6. Particulars of Information Required:
Period to which the information relates: ${formData.timePeriod}

Specific Information / Certified Records Requested:
${formData.informationPoints.map((pt, idx) => `  6.${idx + 1}. ${pt}`).join('\n\n')}

7. Application Fee Details:
${
  formData.isBPL
    ? `* The applicant belongs to the Below Poverty Line (BPL) category (BPL Card No: ${
        formData.bplCardNumber || 'Attached'
      }). As per Section 7(5) of the RTI Act, no fee is applicable.`
    : `* Statutory application fee of ₹10/- is enclosed herewith via Indian Postal Order (IPO) / Demand Draft / Online Payment Gateway Receipt.`
}

8. Mandatory Compliance Note:
As stipulated under Section 7(1) of the RTI Act, 2005, the requested certified information is required to be provided within 30 calendar days from the date of receipt of this application.

Place: ________________________
Date: ${new Date().toLocaleDateString()}

_____________________________
Signature of the Applicant
(${formData.applicantName})
`;

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(formattedDraft);
    onShowToast('RTI Draft copied to clipboard', 'success', 'You can paste it in Word, Google Docs, or RTI Online portal.');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([formattedDraft], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `RTI_Application_${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    onShowToast('RTI Draft downloaded as text file', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-200">
          <FileText className="w-3.5 h-3.5 text-blue-600" />
          <span>Right to Information Act, 2005</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Turn Your Question Into an RTI Draft
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Formulate legally compliant, document-specific questions and generate a ready-to-file Section 6(1) application.
        </p>
      </div>

      {/* Two Column Layout: Editor Form vs Live Formal Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Col (5 cols): Form Customizer */}
        <div className="lg:col-span-5 space-y-6 no-print">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-600" />
              <span>Target Authority & Subject</span>
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Public Authority / Department Name
                </label>
                <input
                  type="text"
                  value={formData.targetDepartment}
                  onChange={(e) => setFormData({ ...formData, targetDepartment: e.target.value })}
                  placeholder="e.g. Public Information Officer, Public Works Department"
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  RTI Subject Line
                </label>
                <textarea
                  rows={2}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800"
                ></textarea>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">
                  Time Period Concerned
                </label>
                <input
                  type="text"
                  value={formData.timePeriod}
                  onChange={(e) => setFormData({ ...formData, timePeriod: e.target.value })}
                  placeholder="e.g. 1st Jan 2024 to 31st Dec 2024"
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800"
                />
              </div>
            </div>
          </div>

          {/* Specific Questions Builder */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-base text-slate-900">
                Information Points Requested
              </h2>
              <span className="text-xs text-slate-400">{formData.informationPoints.length} points</span>
            </div>

            <div className="space-y-2">
              {formData.informationPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-2 text-xs"
                >
                  <span className="font-semibold text-blue-700">{idx + 1}.</span>
                  <p className="flex-1 text-slate-700">{pt}</p>
                  <button
                    type="button"
                    onClick={() => handleRemoveQuestion(idx)}
                    className="text-slate-400 hover:text-rose-600 p-1"
                    title="Remove question"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Question Input */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-semibold text-slate-700 block">
                Add another specific record/question:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customQuestionInput}
                  onChange={(e) => setCustomQuestionInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddQuestion()}
                  placeholder="e.g. Certified copy of tender contract or inspection logs"
                  className="flex-1 p-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={handleAddQuestion}
                  className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>

          {/* Applicant Particulars */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="font-bold text-base text-slate-900">Applicant Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.applicantName}
                  onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                  className="w-full p-2 rounded-lg border border-slate-200"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Phone</label>
                <input
                  type="text"
                  value={formData.applicantPhone}
                  onChange={(e) => setFormData({ ...formData, applicantPhone: e.target.value })}
                  className="w-full p-2 rounded-lg border border-slate-200"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="font-semibold text-slate-700 block mb-1">Address</label>
                <input
                  type="text"
                  value={formData.applicantAddress}
                  onChange={(e) => setFormData({ ...formData, applicantAddress: e.target.value })}
                  className="w-full p-2 rounded-lg border border-slate-200"
                />
              </div>
            </div>

            {/* BPL Toggle */}
            <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isBPL}
                  onChange={(e) => setFormData({ ...formData, isBPL: e.target.checked })}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="font-medium text-slate-700">Below Poverty Line (BPL) Fee Exemption</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Col (7 cols): Formal Live Document Preview */}
        <div className="lg:col-span-7 space-y-4">
          {/* Action Toolbar */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Section 6(1) Standard Format</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyDraft}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                id="btn-copy-rti"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Draft</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                id="btn-print-rti"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                id="btn-download-rti"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .txt</span>
              </button>
            </div>
          </div>

          {/* Printable Formal Document Paper Sheet */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md text-slate-900 font-serif text-xs sm:text-sm leading-relaxed space-y-6 print-shadow-none">
            <div className="text-center border-b border-slate-200 pb-4 space-y-1">
              <h2 className="font-bold text-sm sm:text-base tracking-wider uppercase">
                FORM 'A'
              </h2>
              <p className="text-[11px] font-sans uppercase font-bold text-slate-600">
                Application for Seeking Information Under Section 6(1) of the Right to Information Act, 2005
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-bold">To,</p>
                <p>The Public Information Officer (PIO) / APIO,</p>
                <p className="font-semibold text-slate-800">{formData.targetDepartment}</p>
                <p>{formData.stateName || 'Concerned Administrative Zonal Office'}</p>
              </div>

              <div className="grid grid-cols-1 gap-1 pt-1 font-sans text-xs">
                <p><strong>1. Full Name of the Applicant:</strong> {formData.applicantName}</p>
                <p><strong>2. Address for Communication:</strong> {formData.applicantAddress}</p>
                <p><strong>3. Contact Details:</strong> {formData.applicantPhone} | {formData.applicantEmail}</p>
                <p><strong>4. Citizenship:</strong> Citizen of India (Under Section 3, RTI Act 2005)</p>
              </div>

              <div className="pt-2">
                <p className="font-bold">5. Subject Matter of Information:</p>
                <p className="italic bg-slate-50 p-2.5 rounded border border-slate-100 text-xs">
                  {formData.subject}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <p className="font-bold">6. Specific Particulars of Certified Records Requested:</p>
                <p className="text-xs text-slate-600 font-sans">
                  <strong>Period:</strong> {formData.timePeriod}
                </p>
                <div className="space-y-2 pl-2">
                  {formData.informationPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="font-bold">6.{idx + 1}.</span>
                      <p>{pt}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1 pt-2 font-sans text-xs">
                <p className="font-bold">7. Application Fee Particulars:</p>
                {formData.isBPL ? (
                  <p className="text-slate-700">
                    The applicant belongs to the BPL category. BPL Card Copy attached. Fee is exempted under Section 7(5).
                  </p>
                ) : (
                  <p className="text-slate-700">
                    Statutory fee of ₹10/- is enclosed herewith by way of Indian Postal Order (IPO) / Online Gateway Acknowledgment.
                  </p>
                )}
              </div>

              <div className="pt-2 font-sans text-xs text-slate-600 border-t border-slate-100">
                <p>
                  <strong>Mandatory Statutory Timeline:</strong> Under Section 7(1) of the RTI Act 2005, the Public Information Officer is required to provide the information within 30 days of receiving this application.
                </p>
              </div>

              <div className="pt-8 flex justify-between items-end font-sans text-xs">
                <div>
                  <p>Place: __________________</p>
                  <p>Date: {new Date().toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="h-10"></p>
                  <p className="font-bold border-t border-slate-400 pt-1">
                    Signature of the Applicant
                  </p>
                  <p className="text-slate-500">({formData.applicantName})</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filing Tips Accordion Card */}
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 space-y-2 no-print">
            <h3 className="font-bold flex items-center gap-1.5">
              <Info className="w-4 h-4 text-blue-700" />
              <span>How to File This RTI Draft:</span>
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-slate-700 leading-relaxed">
              <li>
                <strong>Online Filing:</strong> If applying to a Central Ministry or supported state portal, copy-paste points into <a href="https://rtionline.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold underline">rtionline.gov.in</a>.
              </li>
              <li>
                <strong>Offline Filing:</strong> Print this letter, attach a ₹10 Postal Order (IPO) purchased from any India Post office, and send via <strong>Registered Speed Post</strong>.
              </li>
              <li>
                <strong>Tracking:</strong> Keep the speed post postal tracking receipt safe as evidence of delivery.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Safety Notice */}
      <DisclaimerBanner />
    </div>
  );
};
