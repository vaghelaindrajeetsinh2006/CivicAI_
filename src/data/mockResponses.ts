import { AnalysisResponse } from '../types';

export const mockPredefinedResponses: Record<string, AnalysisResponse> = {
  tenant: {
    id: 'resp-tenant-deposit',
    createdAt: new Date().toISOString(),
    rawInput: 'My landlord has not returned my security deposit after 2 months of vacating the flat.',
    category: 'Tenant Rights',
    categoryIcon: 'Home',
    issueBadge: 'Rental / Security Deposit Dispute',
    summary: 'Landlord refusing or delaying refund of rental security deposit post-tenancy without valid deductible itemization.',
    simpleExplanation: 'When you move out of a rented home and return the keys in good condition, the landlord is generally expected to refund your security deposit within the agreed notice period or within a reasonable timeframe (typically 30 days), less any genuinely agreed repairs or unpaid utilities.',
    keyTakeaway: 'You have the right to request an itemized breakdown of any deductions and to receive your undisputed balance in writing.',
    possibleRights: [
      {
        id: 'r-1',
        title: 'Right to Timely Deposit Refund & Account Settlement',
        explanation: 'Under Model Tenancy provisions and standard rental contract principles, landlords must return the security deposit after deducting agreed legitimate liabilities within a stipulated window (normally one month).',
        legalReference: 'Model Tenancy Act / State Rent Control Acts / Indian Contract Act, Sec 73',
        confidenceNote: 'Check your written lease agreement for the exact agreed refund notice duration.'
      },
      {
        id: 'r-2',
        title: 'Right to Itemized Deduction Receipts',
        explanation: 'A landlord cannot make arbitrary or punitive deductions. Any claim for property damage requires reasonable proof, quotes, or repair bills beyond ordinary wear and tear.',
        legalReference: 'Transfer of Property Act, 1882',
        confidenceNote: 'Ordinary wear-and-tear cannot legally be deducted from a tenant deposit.'
      },
      {
        id: 'r-3',
        title: 'Protection Against Unlawful Withholding',
        explanation: 'Withholding money without cause constitutes unjust enrichment or a breach of agreement, entitling you to statutory grievance redressal.',
        legalReference: 'Civil Law / Consumer Protection Forum (if tenancy is through a registered property management firm)',
      }
    ],
    documents: [
      {
        id: 'doc-1',
        name: 'Executed Rental Agreement / Lease Deed',
        whyUseful: 'Proves tenancy dates, agreed deposit amount, refund timeline terms, and move-out notice conditions.'
      },
      {
        id: 'doc-2',
        name: 'Bank Transfer / Cheque Proof of Deposit Paid',
        whyUseful: 'Establishes clear financial proof that the initial security deposit was credited to the landlord.'
      },
      {
        id: 'doc-3',
        name: 'Move-out Handover Acknowledgment / Key Return Record',
        whyUseful: 'Shows date of physical handover and that no immediate damages were claimed on the departure date.'
      },
      {
        id: 'doc-4',
        name: 'Written Communication History (Emails / WhatsApp / Messages)',
        whyUseful: 'Documents previous polite requests, landlord responses or lack thereof, establishing due diligence.'
      },
      {
        id: 'doc-5',
        name: 'Move-Out Photos / Video Evidence of Premises',
        whyUseful: 'Disproves spurious landlord claims of property damage.',
        optional: true
      }
    ],
    authority: {
      name: 'Local Rent Authority / Rent Court or Small Causes Court',
      type: 'Tenancy Redressal & Civil Forum',
      jurisdiction: 'District / Municipal Rent Controller Office',
      officialPortalUrl: 'https://mohua.gov.in',
      description: 'Under the Tenancy framework, disputes concerning recovery of rent or refund of deposit are addressed by the designated Rent Authority or District Civil Court / Legal Services Authority.',
      recommendedAction: 'Serve a formal 15-day written Legal Demand Notice first via Registered Post or formal email before approaching the tribunal.'
    },
    actionPlan: [
      {
        stepNumber: 1,
        title: 'Compile and Organize All Evidence',
        description: 'Gather your signed lease agreement, bank transaction slips showing deposit payment, move-out handover message, and flat condition photos.',
        timeline: 'Day 1–2',
        actionableTip: 'Create a single PDF binder with dates in chronological sequence.'
      },
      {
        stepNumber: 2,
        title: 'Issue a Formal Written Notice to the Landlord',
        description: 'Draft and send a clear, polite but firm written notice (via Email and Registered Speed Post) demanding refund within 10–15 days.',
        timeline: 'Day 3–5',
        actionableTip: 'Use our pre-built Legal Notice Generator to produce a standardized formal letter.'
      },
      {
        stepNumber: 3,
        title: 'Seek Free Mediation via District Legal Services Authority (DLSA)',
        description: 'If the landlord ignores the notice, approach the nearest DLSA pre-litigation mediation cell for a free, cordial compromise session.',
        timeline: 'Day 16–25',
        actionableTip: 'DLSA pre-litigation mediation requires zero court fees and often resolves deposit disputes quickly.'
      },
      {
        stepNumber: 4,
        title: 'Lodge Formal Petition with the Rent Controller / Tribunal',
        description: 'Submit an application before the local Rent Authority under the state tenancy rules for recovery of deposit with applicable interest.',
        timeline: 'Day 30+',
        actionableTip: 'Keep proof of Speed Post delivery receipt attached to your petition.'
      }
    ],
    disclaimer: 'This informational guidance is based on general tenancy principles and does not substitute formal legal counsel. Specific rules vary across state rent control laws.',
    suggestedDraftType: 'tenant_deposit_notice'
  },

  rti: {
    id: 'resp-rti-public-spending',
    createdAt: new Date().toISOString(),
    rawInput: 'I want to know the budget and contractor details for the road repairs in my municipal ward.',
    category: 'Right to Information (RTI)',
    categoryIcon: 'FileText',
    issueBadge: 'Public Information Access / Civic Transparency',
    summary: 'Citizen requesting certified public records regarding municipal infrastructure expenditure and contractor allocations.',
    simpleExplanation: 'Under the Right to Information Act, any citizen has a statutory right to request information, inspect public work files, and obtain certified copies of government contracts, tenders, and sanction letters from any public authority.',
    keyTakeaway: 'The Public Information Officer (PIO) is mandated by law to provide this information within 30 days of receiving your RTI application.',
    possibleRights: [
      {
        id: 'rti-r-1',
        title: 'Right to Inspect Public Works & Obtain Certified Copies',
        explanation: 'Section 2(j) of the RTI Act grants you the right to inspect works, documents, records, take notes, extracts, or certified copies of government files.',
        legalReference: 'RTI Act 2005, Section 2(j)',
      },
      {
        id: 'rti-r-2',
        title: 'Strict 30-Day Mandatory Response Window',
        explanation: 'The Public Information Officer (PIO) must either provide the information or reject it with specific statutory reasons within 30 calendar days.',
        legalReference: 'RTI Act 2005, Section 7(1)',
      },
      {
        id: 'rti-r-3',
        title: 'Right to First Appeal in Case of Delay or Incomplete Data',
        explanation: 'If no reply is received within 30 days or if misleading data is provided, you can file a First Appeal before the Senior Departmental Appellate Authority for free.',
        legalReference: 'RTI Act 2005, Section 19(1)',
      }
    ],
    documents: [
      {
        id: 'rti-doc-1',
        name: 'Formal RTI Application Form (Section 6(1))',
        whyUseful: 'Clear, concise questions specifying the exact road stretch, ward number, and financial year.'
      },
      {
        id: 'rti-doc-2',
        name: 'RTI Application Fee Receipt / Postal Order (₹10 / $ nominal)',
        whyUseful: 'Statutory application fee proof (exempt if applicant holds a Below Poverty Line card).'
      },
      {
        id: 'rti-doc-3',
        name: 'Government Photo ID Proof',
        whyUseful: 'Establishes Indian citizenship as required under RTI Section 3.'
      }
    ],
    authority: {
      name: 'Public Information Officer (PIO), Municipal Corporation / PWD',
      type: 'Public Information Department',
      jurisdiction: 'Local Municipal Corporation / Public Works Department (PWD)',
      officialPortalUrl: 'https://rtionline.gov.in',
      description: 'Designated Public Information Officer (PIO) of the engineering/civil road maintenance department in your municipal corporation.',
      recommendedAction: 'Submit online via RTI Online portal or send via Speed Post addressed to the PIO with a ₹10 IPO.'
    },
    actionPlan: [
      {
        stepNumber: 1,
        title: 'Frame Clear, Specific, Non-Subjective Questions',
        description: 'Ask for specific factual records (e.g., sanctioned amount, contractor name, completion certificate copy, quality test reports) rather than open-ended "Why" questions.',
        timeline: 'Day 1',
        actionableTip: 'Keep questions numbered and focused on documents rather than opinions.'
      },
      {
        stepNumber: 2,
        title: 'Generate and Print the Formal RTI Application',
        description: 'Use our RTI Assistant tool to produce a pre-formatted Section 6(1) letter with standard statutory clauses.',
        timeline: 'Day 1–2',
        actionableTip: 'Attach a ₹10 Indian Postal Order (IPO) or pay online if the department supports web filing.'
      },
      {
        stepNumber: 3,
        title: 'Submit via Speed Post or Department Counter',
        description: 'Send the application to the Public Information Officer (PIO) and preserve the postal tracking receipt.',
        timeline: 'Day 3',
        actionableTip: 'Your 30-day clock begins from the date the department receives the speed post.'
      },
      {
        stepNumber: 4,
        title: 'Monitor 30-Day Response & File First Appeal if Needed',
        description: 'If the PIO does not respond within 30 days or provides incomplete data, submit a First Appeal to the First Appellate Authority within 30 days of the deadline.',
        timeline: 'Day 31–45',
        actionableTip: 'First Appeal carries no additional court fee in most central/state rules.'
      }
    ],
    disclaimer: 'RTI applies strictly to public authorities. Information falling under Section 8 exemptions (national security, commercial trade secrets) may be withheld under law.',
    suggestedDraftType: 'rti_application'
  },

  consumer: {
    id: 'resp-consumer-defective',
    createdAt: new Date().toISOString(),
    rawInput: 'I bought an electronic appliance online that stopped working within 10 days, but the seller and service center refuse replacement or refund.',
    category: 'Consumer Rights',
    categoryIcon: 'ShoppingCart',
    issueBadge: 'Defective Goods / Deficiency of Service',
    summary: 'Consumer facing refusal of replacement or refund for a defective product covered under warranty and e-commerce consumer rules.',
    simpleExplanation: 'When you purchase a product or service, you have a consumer right to receive goods free from defects. If an item fails during the warranty or trial period, the seller/manufacturer is legally obligated to repair, replace, or refund the amount without unfair trade delays.',
    keyTakeaway: 'You can register an instant grievance on the National Consumer Helpline (NCH) or file an e-daakhil consumer complaint without hiring a lawyer.',
    possibleRights: [
      {
        id: 'c-1',
        title: 'Right to Replacement, Repair or Full Refund',
        explanation: 'Under Consumer Protection regulations, consumers are protected against defective goods, false representation of durability, and deficiency in warranty service.',
        legalReference: 'Consumer Protection Act, 2019 / E-Commerce Rules, 2020',
      },
      {
        id: 'c-2',
        title: 'Protection Against Unfair Trade Practices',
        explanation: 'Denying legitimate warranty support or making deceptive promises regarding product quality is classified as an unfair trade practice punishable with penalties.',
        legalReference: 'CPA 2019, Section 2(47)',
      },
      {
        id: 'c-3',
        title: 'Access to e-Daakhil Online Consumer Redressal',
        explanation: 'You can submit a digital complaint directly from home to the District Consumer Commission with minimal filing fee.',
        legalReference: 'National Consumer Disputes Redressal Commission (NCDRC) rules',
      }
    ],
    documents: [
      {
        id: 'c-doc-1',
        name: 'Tax Invoice / Purchase Receipt / Order Confirmation',
        whyUseful: 'Establishes seller identity, date of purchase, warranty coverage, and price paid.'
      },
      {
        id: 'c-doc-2',
        name: 'Warranty Card & Service Job-Sheet / Defect Report',
        whyUseful: 'Proves the breakdown happened during warranty and shows service center inspection notes.'
      },
      {
        id: 'c-doc-3',
        name: 'Email / Customer Care Ticket Escalation History',
        whyUseful: 'Shows you gave the company fair opportunities to resolve the issue before escalating.'
      },
      {
        id: 'c-doc-4',
        name: 'Photos / Video Clips Demonstrating the Defect',
        whyUseful: 'Clear visual proof of product malfunction.'
      }
    ],
    authority: {
      name: 'National Consumer Helpline (NCH) / District Consumer Commission (DCDRC)',
      type: 'Consumer Protection Agency',
      jurisdiction: 'Department of Consumer Affairs',
      officialPortalUrl: 'https://consumerhelpline.gov.in',
      description: 'The National Consumer Helpline provides quick pre-litigation grievance redressal, while the District Commission handles formal compensation cases.',
      recommendedAction: 'Call 1915 or register on consumerhelpline.gov.in first; if unresolved in 15 days, lodge an e-Daakhil claim.'
    },
    actionPlan: [
      {
        stepNumber: 1,
        title: 'Consolidate Invoice, Warranty & Job Sheet',
        description: 'Keep soft copies of the invoice, photos/video of the defect, and service center rejection transcripts.',
        timeline: 'Immediate',
        actionableTip: 'Highlight the exact date of purchase and date of defect report.'
      },
      {
        stepNumber: 2,
        title: 'Send a Final Formal Notice / Email to Nodal Grievance Officer',
        description: 'Send an email directly to the brand’s executive grievance officer giving 7 days to replace or refund.',
        timeline: 'Day 1–2',
        actionableTip: 'Mention that failure to resolve will lead to an NCH / Consumer Forum filing.'
      },
      {
        stepNumber: 3,
        title: 'Lodge Free Complaint on National Consumer Helpline (NCH)',
        description: 'Call 1915 or submit via consumerhelpline.gov.in / INGRAM portal. Over 85% of retail disputes resolve at this stage.',
        timeline: 'Day 3–15',
        actionableTip: 'Save your NCH Docket Number for live tracking.'
      },
      {
        stepNumber: 4,
        title: 'File an Online Case on e-Daakhil Portal if Still Unresolved',
        description: 'If the company refuses to comply, submit an e-Daakhil consumer petition for replacement plus compensation for mental harassment.',
        timeline: 'Day 20+',
        actionableTip: 'No advocate is required; consumers can appear in person or via video link.'
      }
    ],
    disclaimer: 'Ensure that the product has not been subjected to unauthorized repairs or deliberate liquid/physical damage violating warranty terms.',
    suggestedDraftType: 'consumer_grievance_notice'
  },

  schemes: {
    id: 'resp-scheme-welfare',
    createdAt: new Date().toISOString(),
    rawInput: 'Are there any government schemes for low-income families to help with housing subsidy or health insurance?',
    category: 'Government Schemes',
    categoryIcon: 'Gift',
    issueBadge: 'Welfare & Social Security Entitlements',
    summary: 'Citizen inquiring about eligibility for social welfare programs, housing subsidies (PMAY), and public health coverage (PM-JAY).',
    simpleExplanation: 'Both Central and State Governments provide targeted welfare schemes offering direct financial assistance, housing construction subsidies, free hospitalization coverage, and pensions based on income and demographic criteria.',
    keyTakeaway: 'You can check eligibility criteria on official government portals (myscheme.gov.in) and apply through your local Common Service Center (CSC).',
    possibleRights: [
      {
        id: 's-1',
        title: 'Right to Social Security & Affordable Housing Under Welfare Mandates',
        explanation: 'Eligible families without a permanent pucca house can receive upfront interest subsidy or direct bank transfer financial assistance.',
        legalReference: 'Pradhan Mantri Awas Yojana (PMAY) / State Housing Boards',
      },
      {
        id: 's-2',
        title: 'Right to Free Inpatient Hospitalization (Health Insurance)',
        explanation: 'Eligible low-income families are entitled to cashless secondary and tertiary hospitalization coverage up to ₹5,00,000 per family per year.',
        legalReference: 'Ayushman Bharat PM-JAY / State Arogya Schemes',
      },
      {
        id: 's-3',
        title: 'Entitlement to Transparent Direct Benefit Transfer (DBT)',
        explanation: 'Subsidies and cash transfers must be credited directly to your Aadhaar-seeded bank account without middleman deductions.',
        legalReference: 'Direct Benefit Transfer (DBT) Mission Framework',
      }
    ],
    documents: [
      {
        id: 's-doc-1',
        name: 'Aadhaar Card (Aadhaar-seeded Mobile & Bank Account)',
        whyUseful: 'Primary identification and authentication for all DBT schemes.'
      },
      {
        id: 's-doc-2',
        name: 'Income Certificate / Ration Card / BPL Certificate',
        whyUseful: 'Official administrative proof of economic status and household income category.'
      },
      {
        id: 's-doc-3',
        name: 'Bank Account Passbook / Statement with IFSC Code',
        whyUseful: 'Ensures direct benefit transfer reaches the intended account without routing errors.'
      },
      {
        id: 's-doc-4',
        name: 'Domicile / Residence Certificate of Current State',
        whyUseful: 'Verifies state jurisdiction for state-specific welfare additions.'
      }
    ],
    authority: {
      name: 'District Welfare Office / Common Service Center (CSC) / Panchayat Office',
      type: 'Government Administrative Welfare Portal',
      jurisdiction: 'Ministry of Housing and Urban Affairs / Ministry of Health & Family Welfare',
      officialPortalUrl: 'https://www.myscheme.gov.in',
      description: 'Single-window national portal myscheme.gov.in streamlines citizen entitlement discovery across 1,000+ central and state programs.',
      recommendedAction: 'Visit myscheme.gov.in or your nearby Gram Panchayat / CSC counter to register your biometric e-KYC.'
    },
    actionPlan: [
      {
        stepNumber: 1,
        title: 'Verify Your Household SECC & Ration Card Status',
        description: 'Check whether your family is listed in the National Food Security / NFSA or SECC demographic registry.',
        timeline: 'Day 1',
        actionableTip: 'Ensure your Aadhaar is linked to your active bank account.'
      },
      {
        stepNumber: 2,
        title: 'Obtain a Fresh State Income Certificate',
        description: 'Apply via your state e-District portal or local revenue office (Tehsildar/Talati) for a valid income certificate.',
        timeline: 'Day 2–7',
        actionableTip: 'Income certificates are generally issued within 7–14 working days.'
      },
      {
        stepNumber: 3,
        title: 'Complete Single-Window Registration on myScheme / CSC',
        description: 'Submit your profile on myscheme.gov.in or visit a nearby Village Level Entrepreneur (VLE) at a Common Service Center.',
        timeline: 'Day 8–10',
        actionableTip: 'Ask for an acknowledgment receipt with an application reference number.'
      },
      {
        stepNumber: 4,
        title: 'Track Application Status & Verify DBT Credits',
        description: 'Track the status via the respective scheme dashboard using your application ID or mobile number.',
        timeline: 'Ongoing',
        actionableTip: 'If your application is rejected, you have the right to receive written grounds for ineligibility.'
      }
    ],
    disclaimer: 'Final scheme sanction is subject to annual budget quotas, field verification by designated revenue officers, and official guidelines.',
    suggestedDraftType: 'scheme_inquiry'
  },

  civic: {
    id: 'resp-civic-municipal',
    createdAt: new Date().toISOString(),
    rawInput: 'Broken streetlights, open garbage dumping and overflowing drainage in our residential street ignored for months.',
    category: 'Civic Issues',
    categoryIcon: 'Building2',
    issueBadge: 'Municipal Negligence / Public Sanitation',
    summary: 'Citizen reporting public health hazard, non-functioning street lighting, and civic infrastructure failures to municipal authorities.',
    simpleExplanation: 'Municipal corporations and local municipal councils have an obligatory statutory duty to maintain public hygiene, manage solid waste collection, repair road lighting, and maintain storm-water drainage in residential sectors.',
    keyTakeaway: 'You can submit a formal civic grievance with photo geotagging on your city’s municipal mobile app or CPGRAMS central public grievance portal.',
    possibleRights: [
      {
        id: 'civ-1',
        title: 'Right to a Healthy & Clean Environment (Article 21)',
        explanation: 'The Supreme Court has repeatedly affirmed that the Right to Life under Article 21 includes the right to a clean, hygienic living environment free from open sewage hazards.',
        legalReference: 'Constitution of India, Article 21 / Municipal Acts',
      },
      {
        id: 'civ-2',
        title: 'Statutory Obligation of Municipal Authorities',
        explanation: 'Solid Waste Management Rules 2016 and local Municipal Corporation Acts legally mandate regular clearance of garbage and functioning streetlights.',
        legalReference: 'Solid Waste Management Rules, 2016',
      },
      {
        id: 'civ-3',
        title: 'Citizen Charter Service Guarantees',
        explanation: 'Most municipal corporations have published Citizen Charters guaranteeing streetlight fixes within 48 hours and drainage fixes within 24 hours of complaint.',
        legalReference: 'Public Service Delivery Guarantee Acts',
      }
    ],
    documents: [
      {
        id: 'civ-doc-1',
        name: 'Date-stamped Geotagged Photos / Video of the Problem Area',
        whyUseful: 'Provides irrefutable visual evidence of the exact street location and severity.'
      },
      {
        id: 'civ-doc-2',
        name: 'Prior Complaint Ticket Numbers / Reference Receipts',
        whyUseful: 'Proves systemic administrative delay and repeated civic escalation attempts.'
      },
      {
        id: 'civ-doc-3',
        name: 'Joint Petition / Signature Sheet from Ward Residents',
        whyUseful: 'Demonstrates broad community impact, prioritizing fast municipal response.',
        optional: true
      }
    ],
    authority: {
      name: 'Ward Officer / Executive Engineer (Health & Sanitation), Municipal Corporation',
      type: 'Local Urban Civic Body',
      jurisdiction: 'Zonal Municipal Office / Public Health Engineering',
      officialPortalUrl: 'https://pgportal.gov.in',
      description: 'Your zonal municipal office or the centralized Public Grievance Redress and Monitoring System (CPGRAMS).',
      recommendedAction: 'Register a complaint on the municipal mobile app (e.g., Swachhata App) with photo, or submit a formal letter to the Ward Commissioner.'
    },
    actionPlan: [
      {
        stepNumber: 1,
        title: 'Capture High-Quality Geotagged Visual Evidence',
        description: 'Take clear photos showing landmarks, house numbers, and the open drain or broken streetlight during daytime/night.',
        timeline: 'Day 1',
        actionableTip: 'Ensure GPS location is enabled on your phone camera.'
      },
      {
        stepNumber: 2,
        title: 'Submit Digital Complaint via Swachhata App / Municipal Portal',
        description: 'Upload the photo to the Swachhata Mobile App or your city municipal grievance portal for instant automated ward routing.',
        timeline: 'Day 1–2',
        actionableTip: 'Most municipal apps mandate resolution within 48 hours under municipal rankings.'
      },
      {
        stepNumber: 3,
        title: 'Submit a Formal Joint Letter to the Ward Councillor & Zonal Officer',
        description: 'If unresolved after 72 hours, send a signed written grievance notice to the Ward Commissioner / Councillor.',
        timeline: 'Day 4–5',
        actionableTip: 'Use our Civic Grievance Letter Generator for a ready-to-sign draft.'
      },
      {
        stepNumber: 4,
        title: 'Escalate to CPGRAMS / District Collectorate',
        description: 'Lodge an escalation on pgportal.gov.in (CPGRAMS) citing lack of response from local municipal engineering staff.',
        timeline: 'Day 10+',
        actionableTip: 'CPGRAMS monitors grievance resolution directly through senior administrative secretaries.'
      }
    ],
    disclaimer: 'Emergency hazards like sparking electrical cables or collapsed drainage covers should be reported immediately to the local disaster emergency helpline (112).',
    suggestedDraftType: 'civic_grievance_notice'
  },

  workplace: {
    id: 'resp-workplace-wages',
    createdAt: new Date().toISOString(),
    rawInput: 'My employer has withheld my salary for the last 2 months and is threatening termination when I ask.',
    category: 'Workplace Rights',
    categoryIcon: 'Briefcase',
    issueBadge: 'Unpaid Wages / Unlawful Termination Threat',
    summary: 'Employee facing non-payment of contractually earned wages and coercive retaliatory threats by employer.',
    simpleExplanation: 'Employers are legally bound to pay agreed wages within the statutory salary cycle (ordinarily on or before the 7th to 10th of the following month). Withholding earned wages without statutory deduction justification is illegal under labor laws.',
    keyTakeaway: 'You can issue a formal Wage Demand Notice and approach the District Labour Commissioner or Samadhan Labour Portal for recovery of dues.',
    possibleRights: [
      {
        id: 'w-1',
        title: 'Right to Timely Payment of Earned Wages',
        explanation: 'Employers must disburse salaries within the statutory timeframe without arbitrary cuts or unreasonable delays.',
        legalReference: 'Payment of Wages Act / Code on Wages / Industrial Employment Rules',
      },
      {
        id: 'w-2',
        title: 'Protection Against Wrongful Termination & Retaliation',
        explanation: 'Terminating an employee simply for asking for legitimate earned wages constitutes unfair labor practice and bad-faith breach of employment terms.',
        legalReference: 'Industrial Disputes Act / Shops and Establishments Act',
      },
      {
        id: 'w-3',
        title: 'Right to Full & Final Settlement (F&F) with Experience Certificate',
        explanation: 'Upon separation or notice, the employer is legally obligated to clear outstanding salary, encashment, and issue service experience certificates.',
        legalReference: 'State Shops & Commercial Establishments Acts',
      }
    ],
    documents: [
      {
        id: 'w-doc-1',
        name: 'Offer Letter / Employment Agreement / Appointment Letter',
        whyUseful: 'Establishes employment relationship, monthly compensation terms, and notice period obligations.'
      },
      {
        id: 'w-doc-2',
        name: 'Previous Salary Slips & Bank Account Credit Statements',
        whyUseful: 'Demonstrates regular compensation rate and establishes the exact date when payments ceased.'
      },
      {
        id: 'w-doc-3',
        name: 'Attendance Records / Biometric Logs / Work Emails',
        whyUseful: 'Unambiguously proves you performed duties during the disputed unpaid wage months.'
      },
      {
        id: 'w-doc-4',
        name: 'Written Communication with HR / Management',
        whyUseful: 'Shows evidence of your polite reminders and management responses or evasions.'
      }
    ],
    authority: {
      name: 'District Labour Commissioner / Labour Court / Samadhan Portal',
      type: 'Labor & Employment Regulatory Authority',
      jurisdiction: 'Ministry of Labour & Employment / State Labour Department',
      officialPortalUrl: 'https://samadhan.labour.gov.in',
      description: 'The Labour Commissioner’s office oversees wage dispute conciliation, compliance with Shops & Establishment registrations, and recovery of unpaid dues.',
      recommendedAction: 'Send a formal 7-day Wage Demand Letter to HR/Directors, and file a dispute petition on the Samadhan Labour portal if ignored.'
    },
    actionPlan: [
      {
        stepNumber: 1,
        title: 'Back Up All Work Proofs & Attendance Records Securely',
        description: 'Download copies of your appointment contract, previous pay slips, client emails, and timesheets to personal storage.',
        timeline: 'Immediate',
        actionableTip: 'Do not store proof solely on company laptops or office emails that may be revoked.'
      },
      {
        stepNumber: 2,
        title: 'Send a Formal Written Wage Demand Notice',
        description: 'Send a formal letter via registered email and Speed Post to Company Directors & HR demanding full disbursement within 7 business days.',
        timeline: 'Day 1–3',
        actionableTip: 'Use our Workplace Wage Notice Generator for formal legal phrasing.'
      },
      {
        stepNumber: 3,
        title: 'Lodge Conciliation Dispute on Samadhan Labour Portal',
        description: 'If the deadline lapses, file an online conciliation dispute on samadhan.labour.gov.in or visit the local Labour Commissioner office.',
        timeline: 'Day 8–15',
        actionableTip: 'The Labour Officer will summon the employer for a mandatory conciliation hearing.'
      },
      {
        stepNumber: 4,
        title: 'Seek Free Legal Aid via DLSA for Labour Court Claim',
        description: 'If conciliation fails, request the Labour Officer to issue a Failure of Conciliation (FOC) certificate to file for recovery with interest.',
        timeline: 'Day 30+',
        actionableTip: 'Under wage codes, employers can be mandated to pay up to 10x penalty for willful wage suppression.'
      }
    ],
    disclaimer: 'Employment protections can differ between managerial roles and workmen/commercial staff under respective state establishment statutes.',
    suggestedDraftType: 'workplace_wage_notice'
  },

  notices: {
    id: 'resp-notice-demolition-tax',
    createdAt: new Date().toISOString(),
    rawInput: 'I received a show cause notice from the municipal corporation claiming unauthorized construction and threatening penalty or demolition.',
    category: 'Government Notices',
    categoryIcon: 'AlertTriangle',
    issueBadge: 'Administrative Show-Cause / Compliance Notice',
    summary: 'Citizen recipient of a statutory municipal show-cause notice regarding alleged building irregularity or property tax variation.',
    simpleExplanation: 'When a public authority issues a "Show Cause Notice", it means they are giving you a statutory opportunity of being heard before taking any adverse administrative action. You are legally entitled to submit a formal written reply with supporting sanctions within the time specified.',
    keyTakeaway: 'Never ignore a Show Cause Notice. Submitting a timely, acknowledged written response prevents ex-parte orders or arbitrary enforcement.',
    possibleRights: [
      {
        id: 'n-1',
        title: 'Right to Natural Justice (Audi Alteram Partem)',
        explanation: 'No adverse administrative or punitive order can be passed without providing the citizen a fair opportunity to present their defense and documents.',
        legalReference: 'Principles of Administrative Law & Natural Justice',
      },
      {
        id: 'n-2',
        title: 'Right to Inspect Site Inspection Reports & Reasoned Order',
        explanation: 'You are entitled to demand a copy of the official measurement sheet, survey report, or junior engineer remarks that triggered the notice.',
        legalReference: 'State Municipal Corporation Acts / Urban Planning Codes',
      },
      {
        id: 'n-3',
        title: 'Right to Appeal Before Appellate Tribunal / High Court',
        explanation: 'If a designated officer passes an arbitrary demolition or sealing order without considering your sanctioned plan, you can seek an immediate stay order.',
        legalReference: 'Appellate Tribunal for Municipal Corporation / Article 226',
      }
    ],
    documents: [
      {
        id: 'n-doc-1',
        name: 'The Original Notice Received (with postal envelope/dispatch date)',
        whyUseful: 'Proves the exact reference number, section invoked, issuing officer, and response deadline.'
      },
      {
        id: 'n-doc-2',
        name: 'Sanctioned Building Plan / Completion Certificate / Mutation Record',
        whyUseful: 'Primary legal proof of authorized layout, permissible FAR, and registered ownership.'
      },
      {
        id: 'n-doc-3',
        name: 'Property Tax Assessment Receipts (Latest 3–5 Years)',
        whyUseful: 'Demonstrates regular property tax payment and continuous lawful possession.'
      },
      {
        id: 'n-doc-4',
        name: 'Sale Deed / Title Conveyance Deed',
        whyUseful: 'Confirms your legal title and right to represent the premises.'
      }
    ],
    authority: {
      name: 'Designated Zonal Officer / Building Approval Committee / Municipal Commissioner',
      type: 'Municipal Planning & Enforcement Body',
      jurisdiction: 'Zonal Town Planning Department',
      officialPortalUrl: 'https://mohua.gov.in',
      description: 'The issuing executive engineer or designated building authority stated at the bottom of your notice.',
      recommendedAction: 'Draft and file a point-by-point written reply within the notice period (usually 7–15 days) and collect an acknowledgment stamp.'
    },
    actionPlan: [
      {
        stepNumber: 1,
        title: 'Calculate the Strict Response Limitation Date',
        description: 'Check the date of receipt (not just the letter issue date) to establish your exact 7, 15, or 30-day statutory reply window.',
        timeline: 'Day 1',
        actionableTip: 'Keep the speed post envelope as proof of when the notice was actually delivered to you.'
      },
      {
        stepNumber: 2,
        title: 'Gather Sanctioned Maps, Title Deeds & Tax Receipts',
        description: 'Locate your approved architectural drawings, completion certificate, and property tax slips.',
        timeline: 'Day 1–3',
        actionableTip: 'If papers are archived with a bank for mortgage, request certified photocopies immediately.'
      },
      {
        stepNumber: 3,
        title: 'Draft a Point-by-Point Written Reply with Evidence Annexures',
        description: 'Prepare a structured reply answering every allegation, citing your sanctioned plan, and requesting a personal hearing.',
        timeline: 'Day 4–5',
        actionableTip: 'Conclude your reply by stating: "Kindly provide an opportunity for personal hearing with our architect before passing any order."'
      },
      {
        stepNumber: 4,
        title: 'Submit via Physical Inward Counter & Obtain Stamped Acknowledgment',
        description: 'Submit in duplicate at the municipal reception desk. Ensure you obtain a clear rubber stamp with Inward Entry Number on your copy.',
        timeline: 'Day 6–7',
        actionableTip: 'Also email a scanned copy with acknowledgment to the official email ID of the Zonal Commissioner.'
      }
    ],
    disclaimer: 'If the notice threatens imminent demolition within 24–48 hours, consult an enrolled advocate or District Legal Services Authority (DLSA) immediately for an emergency interim stay.',
    suggestedDraftType: 'show_cause_reply'
  }
};
