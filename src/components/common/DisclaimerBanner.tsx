import React from 'react';
import { Info, Shield } from 'lucide-react';

interface DisclaimerBannerProps {
  compact?: boolean;
  className?: string;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ compact = false, className = '' }) => {
  if (compact) {
    return (
      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-50/80 border border-amber-200/70 text-amber-900 text-xs ${className}`}>
        <Info className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
        <span>
          <strong>Informational Guidance:</strong> This AI prototype provides structured guidance and does not replace formal legal advice or official department decisions.
        </span>
      </div>
    );
  }

  return (
    <div className={`rounded-xl bg-gradient-to-r from-slate-50 to-amber-50/40 border border-slate-200/80 p-4 sm:p-5 text-xs text-slate-600 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="p-1.5 rounded-lg bg-amber-100/80 text-amber-800 flex-shrink-0 mt-0.5">
          <Shield className="w-4 h-4" />
        </div>
        <div className="space-y-1">
          <h4 className="font-semibold text-slate-800 text-xs">
            Important Civic & Legal Safety Disclaimer
          </h4>
          <p className="leading-relaxed text-slate-600">
            CivicAI is an educational and civic-empowerment technology prototype designed to help citizens understand procedures, relevant rights, standard documentation, and preparation of drafts. It does not provide formal legal representation, attorney-client privilege, or guarantee outcomes in legal forums. Always verify critical facts with designated public authorities or consult a licensed advocate for court litigation.
          </p>
        </div>
      </div>
    </div>
  );
};
