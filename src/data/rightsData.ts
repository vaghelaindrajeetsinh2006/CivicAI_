import { RightCategoryItem } from '../types';

export const rightsCategories: RightCategoryItem[] = [
  {
    id: 'tenant-rights',
    name: 'Tenant & Housing Rights',
    iconName: 'Home',
    badge: 'Housing & Rental Protections',
    description: 'Statutory protections and fair terms regarding rental security deposits, eviction notices, essential maintenance, privacy, and non-arbitrary rent increases.',
    commonProblems: [
      'Landlord refuses to refund rental security deposit after vacating.',
      'Unreasonable eviction notice with less than agreed notice period.',
      'Landlord arbitrarily cutting off water or electricity supply.',
      'Landlord entering rented property without prior notice or consent.',
      'Refusal by landlord to conduct structural or essential plumbing repairs.'
    ],
    coreRights: [
      {
        title: 'Right to Habitability & Essential Services',
        section: 'Model Tenancy Framework / State Rent Acts',
        detail: 'Landlords cannot withhold essential utilities (electricity, water, elevator) under any circumstances, even during a rent dispute.'
      },
      {
        title: 'Protection Against Arbitrary Eviction',
        section: 'Transfer of Property Act, 1882',
        detail: 'A tenant cannot be forcibly evicted without due process of law, a valid written notice, and a formal decree from a competent Rent Court.'
      },
      {
        title: 'Right to Security Deposit Account Settlement',
        section: 'Model Tenancy Act / Contract Law',
        detail: 'Landlords must return the deposit within 30 days after handing over keys, providing receipts for any legitimate agreed deductions.'
      },
      {
        title: 'Right to 24-Hour Entry Notice',
        section: 'Standard Tenancy Regulations',
        detail: 'Landlords or their agents must provide at least 24 hours prior written or electronic notice before entering the premises for inspections.'
      }
    ],
    standardDocuments: [
      'Executed Lease Agreement (Registered or Notarized)',
      'Rent Receipts / Bank Transfer Transaction Records',
      'Security Deposit Payment Voucher / Bank Statement',
      'Move-Out Notice Email / Written Letter Proof',
      'Move-In / Move-Out Condition Photos or Inspection Sheet'
    ],
    resolutionPath: [
      'Step 1: Check your written tenancy agreement clauses and notice period requirements.',
      'Step 2: Send a polite written reminder via email/WhatsApp summarizing dates and account balance.',
      'Step 3: Serve a formal 15-day Legal Demand Notice via Speed Post if ignored.',
      'Step 4: Approach the District Legal Services Authority (DLSA) for free pre-litigation mediation.',
      'Step 5: File a petition before the local Rent Authority / Small Causes Court.'
    ],
    sampleQuery: 'My landlord has not returned my security deposit of ₹50,000 after 2 months of moving out and is making fake damage excuses.'
  },
  {
    id: 'consumer-rights',
    name: 'Consumer & E-Commerce Rights',
    iconName: 'ShoppingCart',
    badge: 'Product & Service Protections',
    description: 'Rights safeguarding citizens against defective products, deficient services, misleading advertisements, unfair contract terms, and refusal of warranty claims.',
    commonProblems: [
      'E-commerce platform refusing replacement or refund for a damaged delivery.',
      'Manufacturer denying warranty repair on spurious grounds.',
      'Airlines or travel portals cancelling bookings and withholding refund.',
      'Overcharging above Maximum Retail Price (MRP) or hidden service charges.',
      'Deficient banking or insurance claim repudiation.'
    ],
    coreRights: [
      {
        title: 'Right to Safety and Quality Standards',
        section: 'Consumer Protection Act, 2019, Section 2(9)(i)',
        detail: 'Protection against marketing of goods and services which are hazardous to life and property or fail certified standards.'
      },
      {
        title: 'Right to be Informed & Fair Pricing',
        section: 'CPA 2019, Section 2(9)(ii)',
        detail: 'Consumers have the right to complete information on quantity, potency, purity, standard, and MRP before purchasing.'
      },
      {
        title: 'Right to Redressal Against Unfair Trade Practices',
        section: 'CPA 2019, Section 2(9)(v)',
        detail: 'Entitlement to seek replacement, repair, full refund, and compensation against unfair or restrictive trade practices.'
      },
      {
        title: 'Right to File Digital Consumer Complaints (e-Daakhil)',
        section: 'E-Daakhil Portal Framework',
        detail: 'Citizens can file consumer complaints online without physically hiring a lawyer or visiting courtrooms.'
      }
    ],
    standardDocuments: [
      'Tax Invoice / Cash Memo / Order Receipt',
      'Warranty / Guarantee Card signed by the retailer',
      'Service Center Job-Sheet / Inspection Report',
      'Customer Care Email Communications & Grievance Tickets',
      'Visual Photos / Unboxing Video showing the defect'
    ],
    resolutionPath: [
      'Step 1: Contact customer support and secure a formal grievance ticket number.',
      'Step 2: Escalate to the Nodal Grievance Officer of the company giving a 7-day deadline.',
      'Step 3: Call 1915 or register a dispute on the National Consumer Helpline (consumerhelpline.gov.in).',
      'Step 4: If unresolved within 15–30 days, file an online consumer case on the e-Daakhil portal (edaakhil.nic.in).'
    ],
    sampleQuery: 'I purchased a refrigerator online that stopped cooling in 2 weeks. The company service center visited but refuses to replace or refund.'
  },
  {
    id: 'rti-rights',
    name: 'Right to Information (RTI)',
    iconName: 'FileText',
    badge: 'Transparency & Public Accountability',
    description: 'The fundamental statutory right of every citizen to inspect government files, obtain certified copies of public records, examine public tenders, and track civic projects.',
    commonProblems: [
      'Wanting details of municipal fund spending on local roads and street drains.',
      'Delay in processing passport, caste certificate, or driving license without cause.',
      'Seeking answer keys, marks cut-offs, or merit lists for government examinations.',
      'Tracking the status of a pending government land mutation or pension application.',
      'Examining pollution monitoring logs or environmental clearances.'
    ],
    coreRights: [
      {
        title: 'Right to Inspect Public Works and Records',
        section: 'RTI Act 2005, Section 2(j)',
        detail: 'Citizens can inspect documents, sample materials of public works, and obtain certified true copies.'
      },
      {
        title: 'Mandatory 30-Day Response Timeline',
        section: 'RTI Act 2005, Section 7(1)',
        detail: 'The Public Information Officer (PIO) must furnish information within 30 days (or 48 hours if involving life or liberty).'
      },
      {
        title: 'Protection from Arbitrary Denial (Section 8 Exceptions Only)',
        section: 'RTI Act 2005, Section 8',
        detail: 'Information can only be denied if it strictly violates specified statutory exemptions like national defense or cabinet papers.'
      },
      {
        title: 'Right to First & Second Appeals with Penalties on PIO',
        section: 'RTI Act 2005, Sections 19 & 20',
        detail: 'Information Commissions can levy daily fines of ₹250 up to ₹25,000 directly from the salary of an errant PIO.'
      }
    ],
    standardDocuments: [
      'Formal RTI Application Form mentioning Section 6(1)',
      'Statutory Application Fee Receipt / ₹10 Postal Order',
      'Identity / Address Proof of the Applicant',
      'BPL Card Copy (for fee exemption, if applicable)'
    ],
    resolutionPath: [
      'Step 1: Identify the exact Public Authority and designate the Public Information Officer (PIO).',
      'Step 2: Formulate specific, document-oriented questions (ask for records, not opinions).',
      'Step 3: Submit online at rtionline.gov.in or send via Speed Post with ₹10 IPO fee.',
      'Step 4: If no response in 30 days, file a First Appeal to the First Appellate Authority (FAA).',
      'Step 5: If the FAA order is unsatisfactory, file a Second Appeal with the Central/State Information Commission.'
    ],
    sampleQuery: 'I want to know the budget, contractor name, and completion deadline for the drainage construction work in Ward 14.'
  },
  {
    id: 'civic-rights',
    name: 'Civic & Municipal Grievances',
    iconName: 'Building2',
    badge: 'Urban Governance & Public Services',
    description: 'Entitlements to clean surroundings, maintained roads, functional street lighting, garbage clearance, hygienic drainage, and citizen charter services.',
    commonProblems: [
      'Potholes and dug-up roads left unrepaired by civic contractors.',
      'Uncollected solid waste and overflowing municipal trash dumpsters.',
      'Contaminated municipal water supply or low water pressure.',
      'Dark streets due to burnt-out streetlights posing safety risks.',
      'Stagnant open sewage creating dengue/malaria breeding risks.'
    ],
    coreRights: [
      {
        title: 'Right to a Clean & Safe Environment',
        section: 'Constitution of India, Article 21',
        detail: 'The constitutional right to life guarantees clean drinking water, disease-free public spaces, and safe civic infrastructure.'
      },
      {
        title: 'Statutory Duty of Municipal Corporations',
        section: 'State Municipal Corporation Acts',
        detail: 'Urban local bodies are legally obligated to provide daily waste collection, drainage desilting, and road lighting.'
      },
      {
        title: 'Citizen Charter Time-Bound Service Delivery',
        section: 'Public Services Guarantee Acts',
        detail: 'Municipalities must resolve emergency civic complaints within defined hours (e.g. 24h for dead animal removal, 48h for streetlights).'
      }
    ],
    standardDocuments: [
      'Geotagged Date-stamped Photos / Videos of the hazard',
      'Prior Complaint Numbers from municipal helplines / apps',
      'Ward Resident Signature Campaign Letter (for community issues)'
    ],
    resolutionPath: [
      'Step 1: Log a complaint on the official Municipal Mobile App (e.g., Swachhata App) with photo.',
      'Step 2: Note the complaint ticket ID and monitor the SLA countdown.',
      'Step 3: If not resolved, submit a written memorandum to the Ward Councillor and Zonal Executive Engineer.',
      'Step 4: Escalate to the central CPGRAMS portal (pgportal.gov.in) for oversight.'
    ],
    sampleQuery: 'Open garbage dumping and overflowing sewage on our main street has been ignored for 3 weeks despite calling the municipal line.'
  },
  {
    id: 'workplace-rights',
    name: 'Workplace & Labor Protections',
    iconName: 'Briefcase',
    badge: 'Employment & Fair Compensation',
    description: 'Rights governing timely salary disbursement, fair working hours, overtime compensation, protection from harassment, safe working conditions, and statutory notice periods.',
    commonProblems: [
      'Employer withholding earned salary or delayed by months.',
      'Sudden verbal termination without contractually agreed notice or severance pay.',
      'Refusal to issue Experience Certificate / Relieving Letter after completing notice.',
      'Workplace harassment, bullying, or denial of statutory maternity benefits.',
      'Unpaid overtime hours exceeding maximum statutory limits.'
    ],
    coreRights: [
      {
        title: 'Right to Timely Payment of Earned Wages',
        section: 'Payment of Wages Act / Code on Wages',
        detail: 'Salaries must be paid within 7 to 10 days of the end of the monthly wage period without unauthorized deductions.'
      },
      {
        title: 'Right to Written Employment Terms & Service Certificate',
        section: 'Shops and Commercial Establishments Acts',
        detail: 'Employees are entitled to written appointment terms and a full-and-final settlement certificate upon relieving.'
      },
      {
        title: 'Protection from Unlawful Retaliation & Arbitrary Sacking',
        section: 'Industrial Employment Framework',
        detail: 'Employers cannot terminate an employee without adhering to notice period terms or paying compensation in lieu thereof.'
      },
      {
        title: 'Right to Safe & Harassment-Free Workplace',
        section: 'POSH Act 2013 / Occupational Safety Code',
        detail: 'Mandatory Internal Complaints Committee (ICC) for safety and redressal of workplace harassment.'
      }
    ],
    standardDocuments: [
      'Appointment / Offer Letter / Employment Contract',
      'Past Salary Slips and Bank Statements showing wage credits',
      'Attendance Logs / Timesheet Records / Client Email Proofs',
      'Resignation / Notice Period Emails and HR Correspondence'
    ],
    resolutionPath: [
      'Step 1: Collect and secure all attendance, contract, and email records to personal devices.',
      'Step 2: Send a formal written 7-day Wage Demand Letter to Directors & HR via Speed Post & email.',
      'Step 3: Submit a dispute on the Ministry of Labour’s Samadhan Portal (samadhan.labour.gov.in).',
      'Step 4: Attend the conciliation meeting before the Labour Conciliation Officer.',
      'Step 5: Apply for free legal counsel at the District Legal Services Authority (DLSA) if needed.'
    ],
    sampleQuery: 'My IT company withheld 2 months of salary and is refusing to give my experience letter after I served my full 60 days notice.'
  },
  {
    id: 'government-notices',
    name: 'Government Notices & Compliance',
    iconName: 'AlertTriangle',
    badge: 'Administrative Law & Due Process',
    description: 'Understanding your legal rights when receiving property tax demands, municipal show-cause notices, traffic e-challans, land acquisition notices, or building compliance letters.',
    commonProblems: [
      'Received a municipal notice claiming unauthorized construction with 7-day deadline.',
      'Notice of disputed property tax arrears with heavy retroactive penalties.',
      'Summons from a civic department for alleged license non-compliance.',
      'Notice of land acquisition / road widening without clear compensation terms.'
    ],
    coreRights: [
      {
        title: 'Right to Natural Justice (Opportunity of Hearing)',
        section: 'Principles of Constitutional Administrative Law',
        detail: 'No government agency can demolish, seal, or penalize without serving a written notice and giving an opportunity to respond.'
      },
      {
        title: 'Right to Inspect Official Inspection Reports',
        section: 'Administrative Law Standards',
        detail: 'You have the right to receive copies of site measurement sheets or surveyor reports that triggered the notice.'
      },
      {
        title: 'Right to Timely Appeal and Interim Protection',
        section: 'Appellate Tribunal / Civil Procedure',
        detail: 'Appellate tribunals exist to review arbitrary orders passed by lower municipal or tax officers.'
      }
    ],
    standardDocuments: [
      'The original notice received (including postal delivery date envelope)',
      'Sanctioned architectural building plan / completion certificate',
      'Latest Property Tax receipts (last 3–5 years)',
      'Registered Sale Deed / Title Documents'
    ],
    resolutionPath: [
      'Step 1: Check the exact response deadline from the date of physical receipt.',
      'Step 2: Gather approved sanction letters, title deeds, and tax receipts.',
      'Step 3: Prepare a point-by-point written reply refuting wrongful claims.',
      'Step 4: Submit at the municipal inward desk and collect a rubber-stamped acknowledgment.',
      'Step 5: If imminent coercive action is threatened, seek an urgent interim stay from the tribunal.'
    ],
    sampleQuery: 'Received a show cause notice from the municipal corporation claiming my balcony enclosure is unauthorized and giving 7 days to demolish.'
  }
];
