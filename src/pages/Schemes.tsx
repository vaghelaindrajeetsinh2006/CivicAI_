import React, { useState } from 'react';
import {
  Gift,
  Search,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  FileCheck,
  Building,
  UserCheck,
  Sparkles,
  Info,
  Layers,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { governmentSchemes } from '../data/schemesData';
import { Scheme } from '../types';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const Schemes: React.FC = () => {
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>(governmentSchemes[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  // Screener Form State
  const [userAge, setUserAge] = useState<number>(32);
  const [userIncome, setUserIncome] = useState<number>(240000);
  const [userOccupation, setUserOccupation] = useState<string>('Daily Wage Worker');
  const [userCategory, setUserCategory] = useState<string>('BPL');
  const [hasPuccaHouse, setHasPuccaHouse] = useState<boolean>(false);
  const [hasLandHolding, setHasLandHolding] = useState<boolean>(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(true);

  const selectedScheme =
    governmentSchemes.find((s) => s.id === selectedSchemeId) || governmentSchemes[0];

  const filteredSchemes = governmentSchemes.filter((s) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.department.toLowerCase().includes(q) ||
      s.overview.toLowerCase().includes(q)
    );
  });

  // Evaluate Eligibility
  const evaluateEligibility = (scheme: Scheme) => {
    const matchedCriteria: string[] = [];
    const neededCriteria: string[] = [];

    // Age check
    if (scheme.minAge !== undefined && scheme.maxAge !== undefined) {
      if (userAge >= scheme.minAge && userAge <= scheme.maxAge) {
        matchedCriteria.push(`Age (${userAge} years) is within the eligible bracket of ${scheme.minAge}–${scheme.maxAge} years.`);
      } else {
        neededCriteria.push(`Age must be between ${scheme.minAge} and ${scheme.maxAge} years.`);
      }
    }

    // Income check
    if (scheme.maxIncome !== undefined) {
      if (userIncome <= scheme.maxIncome) {
        matchedCriteria.push(`Annual household income (₹${userIncome.toLocaleString()}) falls below the ceiling of ₹${scheme.maxIncome.toLocaleString()}.`);
      } else {
        neededCriteria.push(`Annual income exceeds standard threshold of ₹${scheme.maxIncome.toLocaleString()}.`);
      }
    }

    // Scheme-specific checks
    if (scheme.id === 'pm-awas-yojana') {
      if (!hasPuccaHouse) {
        matchedCriteria.push('Applicant family does not own a permanent pucca house.');
      } else {
        neededCriteria.push('PMAY requires that neither applicant nor immediate family own an existing all-weather pucca house.');
      }
    }

    if (scheme.id === 'pm-kisan-samman-nidhi') {
      if (hasLandHolding || userOccupation === 'Farmer') {
        matchedCriteria.push('Cultivable agricultural landholding condition is met.');
      } else {
        neededCriteria.push('Must hold verifiable agricultural land ownership in land records (Khasra-Khatauni).');
      }
    }

    if (scheme.id === 'pm-svanidhi') {
      if (userOccupation === 'Street Vendor' || userOccupation === 'Daily Wage Worker') {
        matchedCriteria.push('Identified as an urban/semi-urban micro-vendor or informal worker.');
      } else {
        matchedCriteria.push('Letter of Recommendation (LoR) from local municipality can establish vending status.');
      }
    }

    let status: 'Likely Eligible' | 'May Be Eligible' | 'Criteria Mismatch' = 'May Be Eligible';
    if (neededCriteria.length === 0) {
      status = 'Likely Eligible';
    } else if (neededCriteria.length >= 2) {
      status = 'Criteria Mismatch';
    }

    return { status, matchedCriteria, neededCriteria };
  };

  const evalResult = evaluateEligibility(selectedScheme);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold border border-purple-200">
          <Gift className="w-3.5 h-3.5 text-purple-600" />
          <span>Welfare Entitlement Screener</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Find Out If You May Qualify
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Explore flagship government welfare schemes and test your household eligibility against official criteria.
        </p>
      </div>

      {/* Scheme Search & Selection Chips */}
      <div className="space-y-3">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search scheme (e.g. Ayushman, Awas, Kisan, Vendor, APY...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 shadow-xs"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {filteredSchemes.map((scheme) => {
            const isSelected = selectedSchemeId === scheme.id;
            return (
              <button
                key={scheme.id}
                type="button"
                onClick={() => setSelectedSchemeId(scheme.id)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all text-left ${
                  isSelected
                    ? 'bg-purple-800 text-white border-purple-800 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-purple-50/50'
                }`}
              >
                <span className="block text-[10px] opacity-80 uppercase tracking-wider">
                  {scheme.category}
                </span>
                <span className="font-bold">{scheme.name.split('—')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Interactive Screener Questionnaire vs Live Assessment Result */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Col (5 cols): Screener Form Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-purple-600" />
                <span>Household Demographic Profile</span>
              </h2>
              <span className="text-[11px] text-slate-400">Interactive Inputs</span>
            </div>

            <div className="space-y-4 text-xs">
              {/* Age */}
              <div>
                <div className="flex justify-between font-semibold text-slate-700 mb-1">
                  <span>Applicant Age:</span>
                  <span className="text-purple-700 font-bold">{userAge} Years</span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="75"
                  value={userAge}
                  onChange={(e) => setUserAge(Number(e.target.value))}
                  className="w-full accent-purple-700"
                />
              </div>

              {/* Annual Household Income */}
              <div>
                <div className="flex justify-between font-semibold text-slate-700 mb-1">
                  <span>Annual Household Income:</span>
                  <span className="text-purple-700 font-bold">₹{userIncome.toLocaleString()}</span>
                </div>
                <select
                  value={userIncome}
                  onChange={(e) => setUserIncome(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 bg-white"
                >
                  <option value={120000}>Below ₹1,20,000 (Low Income / BPL)</option>
                  <option value={240000}>₹1,20,000 – ₹2,50,000 (EWS)</option>
                  <option value={450000}>₹2,50,000 – ₹5,00,000 (LIG)</option>
                  <option value={750000}>₹5,00,000 – ₹8,00,000 (MIG-I)</option>
                  <option value={1200000}>Above ₹8,00,000</option>
                </select>
              </div>

              {/* Occupation */}
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Primary Occupation</label>
                <select
                  value={userOccupation}
                  onChange={(e) => setUserOccupation(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 bg-white"
                >
                  <option value="Daily Wage Worker">Daily Wage / Construction Worker</option>
                  <option value="Farmer">Small & Marginal Farmer</option>
                  <option value="Street Vendor">Street Vendor / Hawker / Cart Seller</option>
                  <option value="Informal Worker">Informal / Gig / Domestic Worker</option>
                  <option value="Homemaker">Homemaker</option>
                  <option value="Salaried Worker">Salaried Private Employee</option>
                  <option value="Self Employed">Self Employed / Small Artisan</option>
                </select>
              </div>

              {/* Social Category */}
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Household Category</label>
                <select
                  value={userCategory}
                  onChange={(e) => setUserCategory(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 bg-white"
                >
                  <option value="BPL">BPL (Below Poverty Line) Ration Card</option>
                  <option value="EWS">Economically Weaker Section (EWS)</option>
                  <option value="Women Head">Women Headed Household</option>
                  <option value="SC/ST">SC / ST Category</option>
                  <option value="OBC">OBC Category</option>
                  <option value="General">General Category</option>
                </select>
              </div>

              {/* Special Toggles */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasPuccaHouse}
                    onChange={(e) => setHasPuccaHouse(e.target.checked)}
                    className="rounded text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-slate-700">Family already owns a permanent pucca house</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasLandHolding}
                    onChange={(e) => setHasLandHolding(e.target.checked)}
                    className="rounded text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-slate-700">Family owns registered agricultural land</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col (7 cols): Eligibility Result & Scheme Guide */}
        <div className="lg:col-span-7 space-y-6">
          {/* Result Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
            {/* Scheme Header */}
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                  {selectedScheme.category} Scheme
                </span>
                <span className="text-xs text-slate-500">{selectedScheme.department}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {selectedScheme.name}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedScheme.overview}
              </p>
            </div>

            {/* Eligibility Verdict Banner */}
            <div
              className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
                evalResult.status === 'Likely Eligible'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : evalResult.status === 'May Be Eligible'
                  ? 'bg-amber-50 border-amber-200 text-amber-950'
                  : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {evalResult.status === 'Likely Eligible' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                ) : evalResult.status === 'May Be Eligible' ? (
                  <Info className="w-5 h-5 text-amber-600" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                )}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm sm:text-base">{evalResult.status}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/80">
                    Preliminary Screener
                  </span>
                </div>
                <p className="text-xs leading-relaxed opacity-90">
                  {evalResult.status === 'Likely Eligible'
                    ? 'Based on your age, income, and category inputs, your profile satisfies the primary criteria published by the department.'
                    : evalResult.status === 'May Be Eligible'
                    ? 'Your profile matches several key criteria, but may require supplementary documentation or biometric verification.'
                    : 'Some eligibility criteria may not align with standard thresholds. Check scheme exemptions below.'}
                </p>
              </div>
            </div>

            {/* Matched vs Needed Criteria Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                <h4 className="font-bold text-emerald-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Criteria Matched ({evalResult.matchedCriteria.length})</span>
                </h4>
                <ul className="space-y-1.5 text-slate-700">
                  {evalResult.matchedCriteria.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-slate-500" />
                  <span>Key Rules & Verifications</span>
                </h4>
                <ul className="space-y-1.5 text-slate-700">
                  {evalResult.neededCriteria.length > 0 ? (
                    evalResult.neededCriteria.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-amber-900">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-slate-500">
                      All standard primary rules matched. Official field audit will confirm Aadhaar biometric seeding.
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Scheme Key Benefits */}
            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/70 text-xs space-y-1.5">
              <span className="font-bold text-purple-900 block text-xs">Scheme Benefits:</span>
              <p className="text-slate-800 leading-relaxed font-medium">
                {selectedScheme.benefits}
              </p>
            </div>

            {/* Required Verification Documents */}
            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-purple-600" />
                <span>Required Verification Documents:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedScheme.requiredDocuments.map((doc, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                    <span className="text-slate-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Apply & Official Portal Link */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                <span>Application Mode: <strong>{selectedScheme.applicationMode}</strong></span>
              </div>

              <a
                href={selectedScheme.officialPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-xs shadow-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>{selectedScheme.officialPortalName}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Notice */}
      <DisclaimerBanner />
    </div>
  );
};
