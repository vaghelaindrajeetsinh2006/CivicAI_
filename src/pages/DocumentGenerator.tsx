import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  PenTool,
  Copy,
  Printer,
  Download,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  FileText,
  Building,
  ShieldCheck,
  Info
} from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface DocumentGeneratorProps {
  onShowToast: (title: string, type?: 'success' | 'info' | 'error', desc?: string) => void;
}

export const DocumentGenerator: React.FC<DocumentGeneratorProps> = ({ onShowToast }) => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'tenant_deposit_notice';

  const [templateType, setTemplateType] = useState<string>(initialType);

  // Common Fields
  const [senderName, setSenderName] = useState('Indrajeetsinh Vaghela');
  const [senderAddress, setSenderAddress] = useState('Flat 402, Green Meadows, Sector 12, Urban City');
  const [senderPhone, setSenderPhone] = useState('+91 98765 43210');
  const [senderEmail, setSenderEmail] = useState('citizen@example.com');

  const [recipientName, setRecipientName] = useState('Mr. Ramesh Kumar (Property Owner)');
  const [recipientAddress] = useState('House 88, Heritage Enclave, Civil Lines, Urban City');

  const [disputeAmount, setDisputeAmount] = useState('₹45,000');
  const [tenancyOrInvoiceDate, setTenancyOrInvoiceDate] = useState('1st June 2024 to 31st May 2026');
  const [disputeDescription, setDisputeDescription] = useState(
    'The rental premises were vacated in pristine condition on 31st May 2026 and keys were handed over. Despite repeated polite reminders, the security deposit balance has not been settled.'
  );
  const [noticePeriodDays, setNoticePeriodDays] = useState('15');

  useEffect(() => {
    const qType = searchParams.get('type');
    if (qType) {
      setTemplateType(qType);
      if (qType === 'consumer_grievance_notice') {
        setRecipientName('Nodal Grievance Officer, Consumer Brand / Retailer Pvt Ltd');
        setDisputeDescription('A defective electronic appliance failed within 10 days of purchase. The service center refuses replacement or refund in violation of the Consumer Protection Act 2019.');
        setDisputeAmount('₹28,500');
      } else if (qType === 'workplace_wage_notice') {
        setRecipientName('Board of Directors & Head of HR, Apex Solutions Pvt Ltd');
        setDisputeDescription('Earned salary for the past two calendar months has been withheld without justification following resignation notice.');
        setDisputeAmount('₹90,000');
      } else if (qType === 'civic_grievance_notice') {
        setRecipientName('The Municipal Commissioner / Executive Engineer, Zonal Corporation');
        setDisputeDescription('Broken streetlights and overflowing drainage on Street 4 have created severe public health hazards, ignored for over 3 weeks.');
        setDisputeAmount('N/A (Civic Repair)');
      }
    }
  }, [searchParams]);

  // Generate formatted document text
  const generateDocumentText = () => {
    const dateToday = new Date().toLocaleDateString();

    switch (templateType) {
      case 'consumer_grievance_notice':
        return `LEGAL DEMAND NOTICE (UNDER CONSUMER PROTECTION ACT, 2019)
(Delivered via Registered Speed Post & Electronic Mail)

Date: ${dateToday}

To,
${recipientName}
${recipientAddress}

From:
${senderName}
${senderAddress}
Contact: ${senderPhone} | Email: ${senderEmail}

SUBJECT: FORMAL NOTICE DEMANDING REFUND / REPLACEMENT FOR DEFECTIVE GOODS & DEFICIENCY OF SERVICE

Dear Sir/Madam,

Under instructions from myself as an aggrieved consumer, this formal notice is served upon you as follows:

1. That the undersigned purchased a product/service from your establishment on ${tenancyOrInvoiceDate} against verified invoice payment of ${disputeAmount}.

2. That the purchased product demonstrated major functional defects and ceased working within the statutory warranty period:
   "${disputeDescription}"

3. That despite bringing the defect to your authorized service center, your representatives arbitrarily refused replacement or refund, constituting an "Unfair Trade Practice" and "Deficiency of Service" under Sections 2(47) and 2(11) of the Consumer Protection Act, 2019.

4. YOU ARE HEREBY CALLED UPON to replace the defective product or refund the entire paid sum of ${disputeAmount} along with ₹5,000 towards mental harassment within ${noticePeriodDays} days from the receipt of this notice.

Failure to resolve this dispute within the stipulated timeline will compel the undersigned to initiate legal proceedings before the competent District Consumer Disputes Redressal Commission (e-Daakhil) at your sole risk, cost, and consequence.

Yours faithfully,

_______________________
${senderName}
(Aggrieved Consumer)`;

      case 'workplace_wage_notice':
        return `FORMAL NOTICE FOR DEMAND OF UNPAID EARNED WAGES & FULL-AND-FINAL SETTLEMENT
(Under Payment of Wages Act & State Shops & Commercial Establishments Act)

Date: ${dateToday}

To,
${recipientName}
${recipientAddress}

From:
${senderName}
${senderAddress}
Contact: ${senderPhone} | Email: ${senderEmail}

SUBJECT: NOTICE REQUIRING IMMEDIATE DISBURSEMENT OF UNPAID EARNED SALARY OF ${disputeAmount}

Respected Sir/Madam,

This formal communication serves as a statutory wage demand notice:

1. That the undersigned was engaged in service with your organization from ${tenancyOrInvoiceDate} performing duties diligently as per employment contract.

2. That earned monthly compensation amounting to ${disputeAmount} remains unlawfully withheld by the management:
   "${disputeDescription}"

3. That under the Payment of Wages Act and Code on Wages, employers are legally mandated to disburse earned compensation within 7 to 10 days of the close of the wage cycle without arbitrary deductions.

4. YOU ARE HEREBY CALLED UPON to credit the outstanding wage arrears of ${disputeAmount} and issue the formal Experience / Relieving Certificate within ${noticePeriodDays} business days of this notice.

If payment is not released within ${noticePeriodDays} days, a formal dispute petition will be lodged with the Office of the District Labour Commissioner and the Samadhan Labour Portal.

Sincerely,

_______________________
${senderName}`;

      case 'civic_grievance_notice':
        return `FORMAL CITIZEN REPRESENTATION & CIVIC GRIEVANCE NOTICE
(Under Urban Local Bodies Municipal Act & Citizen Charter)

Date: ${dateToday}

To,
${recipientName}
${recipientAddress}

From:
${senderName} (Ward Resident)
${senderAddress}
Contact: ${senderPhone} | Email: ${senderEmail}

SUBJECT: URGENT CITIZEN GRIEVANCE REGARDING CIVIC REPAIRS & PUBLIC SANITATION

Respected Authority,

I wish to bring to your urgent attention a serious civic infrastructure hazard in our locality:

1. Location of Grievance: ${senderAddress}
2. Nature of Civic Issue:
   "${disputeDescription}"

3. Under the Municipal Corporation Act and Citizen Charter timelines, the local urban local body is statutorily obligated to maintain clean drainage and functioning street lighting in residential sectors.

4. In light of the public safety and mosquito breeding health risks, I earnestly request your office to depute the zonal civil engineering staff to inspect and rectify the defect within ${noticePeriodDays} days.

Attached please find date-stamped visual photographs for your immediate reference.

Thanking you.

Yours sincerely,

_______________________
${senderName}`;

      default: // Tenant deposit notice
        return `LEGAL DEMAND NOTICE FOR REFUND OF RENTAL SECURITY DEPOSIT
(Sent via Registered Speed Post & Electronic Mail)

Date: ${dateToday}

To,
${recipientName}
${recipientAddress}

From:
${senderName} (Former Tenant)
${senderAddress}
Contact: ${senderPhone} | Email: ${senderEmail}

SUBJECT: FORMAL DEMAND NOTICE FOR FULL REFUND OF RENTAL SECURITY DEPOSIT OF ${disputeAmount}

Dear Sir/Madam,

This formal legal notice is served upon you regarding the tenancy of the residential premises situated at ${senderAddress}:

1. That the undersigned occupied the aforementioned property as a lawful tenant under the lease agreement dated ${tenancyOrInvoiceDate}.

2. That at the inception of the tenancy, a refundable security deposit of ${disputeAmount} was paid by the undersigned through verified bank transaction.

3. That the undersigned vacated the premises in good and clean order on the agreed move-out date and returned physical keys to your possession:
   "${disputeDescription}"

4. That under Model Tenancy guidelines and standard tenancy contract principles, the security deposit must be refunded within 30 days of key handover, less any mutually agreed legitimate deductions supported by itemized repair bills.

5. YOU ARE HEREBY CALLED UPON to refund the balance deposit of ${disputeAmount} into the undersigned's bank account within ${noticePeriodDays} calendar days from receipt of this notice.

Should you fail to settle the deposit within ${noticePeriodDays} days, the undersigned will be constrained to initiate formal recovery proceedings before the Rent Authority / Small Causes Court along with statutory interest and legal expenses.

Yours faithfully,

_______________________
${senderName}
(Former Tenant)`;
    }
  };

  const documentText = generateDocumentText();

  const handleCopy = () => {
    navigator.clipboard.writeText(documentText);
    onShowToast('Document copied to clipboard', 'success');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([documentText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `Legal_Notice_${templateType}_${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    onShowToast('Notice downloaded as text file', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <PenTool className="w-3.5 h-3.5 text-emerald-600" />
          <span>Legal Notice & Document Generator</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Draft Formal Notices in Minutes
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Create legally structured demand letters, tenant refund notices, and civic grievance petitions with standard statutory clauses.
        </p>
      </div>

      {/* Template Type Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin no-print">
        {[
          { id: 'tenant_deposit_notice', label: '🏠 Tenant Deposit Refund' },
          { id: 'consumer_grievance_notice', label: '🛒 Consumer Warranty / Refund' },
          { id: 'workplace_wage_notice', label: '💼 Workplace Wage Demand' },
          { id: 'civic_grievance_notice', label: '🏛️ Municipal Civic Grievance' }
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTemplateType(t.id)}
            className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
              templateType === t.id
                ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Two Column Layout: Editor Form vs Formal Paper Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (5 cols): Form Customizer */}
        <div className="lg:col-span-5 space-y-6 no-print">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Customize Notice Details</span>
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Your Full Name (Sender)</label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Your Address</label>
                <input
                  type="text"
                  value={senderAddress}
                  onChange={(e) => setSenderAddress(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Recipient Name / Company</label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Disputed Sum</label>
                  <input
                    type="text"
                    value={disputeAmount}
                    onChange={(e) => setDisputeAmount(e.target.value)}
                    className="w-full p-2 rounded-xl border border-slate-200 text-slate-800"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Notice Window</label>
                  <select
                    value={noticePeriodDays}
                    onChange={(e) => setNoticePeriodDays(e.target.value)}
                    className="w-full p-2 rounded-xl border border-slate-200 text-slate-800 bg-white"
                  >
                    <option value="7">7 Days</option>
                    <option value="15">15 Days (Recommended)</option>
                    <option value="30">30 Days</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Relevant Date / Duration</label>
                <input
                  type="text"
                  value={tenancyOrInvoiceDate}
                  onChange={(e) => setTenancyOrInvoiceDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Facts of the Case</label>
                <textarea
                  rows={4}
                  value={disputeDescription}
                  onChange={(e) => setDisputeDescription(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 leading-relaxed"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Formal Live Document Sheet */}
        <div className="lg:col-span-7 space-y-4">
          {/* Action Toolbar */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Standard Formal Notice Format</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                id="btn-copy-notice"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                id="btn-print-notice"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                id="btn-download-notice"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .txt</span>
              </button>
            </div>
          </div>

          {/* Printable Formal Document Paper Sheet */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md text-slate-900 font-serif text-xs sm:text-sm leading-relaxed whitespace-pre-wrap print-shadow-none">
            {documentText}
          </div>
        </div>
      </div>

      {/* Safety Notice */}
      <DisclaimerBanner />
    </div>
  );
};
