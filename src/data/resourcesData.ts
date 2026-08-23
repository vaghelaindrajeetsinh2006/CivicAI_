export interface OfficialPortal {
  id: string;
  name: string;
  category: string;
  department: string;
  url: string;
  description: string;
  helpline?: string;
  isPopular?: boolean;
}

export interface GlossaryTerm {
  term: string;
  category: string;
  plainEnglish: string;
  exampleInContext: string;
}

export interface CivicFAQ {
  question: string;
  category: string;
  answer: string;
}

export const officialPortals: OfficialPortal[] = [
  {
    id: 'nch',
    name: 'National Consumer Helpline (NCH / INGRAM)',
    category: 'Consumer Grievances',
    department: 'Department of Consumer Affairs, Government of India',
    url: 'https://consumerhelpline.gov.in',
    description: 'Centralized government grievance registration system for defective goods, deficiency of service, warranty disputes, and airline/e-commerce refunds.',
    helpline: 'Toll-free 1915 or SMS to 8800001915',
    isPopular: true
  },
  {
    id: 'rti-online',
    name: 'RTI Online Portal',
    category: 'Information Access',
    department: 'Department of Personnel and Training (DoPT)',
    url: 'https://rtionline.gov.in',
    description: 'Submit online RTI applications and first appeals for all Central Government ministries, departments, and public sector undertakings.',
    helpline: '011-24622461',
    isPopular: true
  },
  {
    id: 'cpgrams',
    name: 'CPGRAMS (Centralized Public Grievance Redress and Monitoring System)',
    category: 'Civic & Government Services',
    department: 'Department of Administrative Reforms and Public Grievances (DARPG)',
    url: 'https://pgportal.gov.in',
    description: '24x7 online system for citizens to lodge grievances against any Central/State Ministry, municipal body, banking, or public service organization.',
    helpline: '1800-11-0031',
    isPopular: true
  },
  {
    id: 'nalsa',
    name: 'NALSA — National Legal Services Authority (Free Legal Aid)',
    category: 'Legal Aid & Access',
    department: 'Supreme Court of India & Ministry of Law and Justice',
    url: 'https://nalsa.gov.in',
    description: 'Provides free, competent legal services to the weaker sections of society including women, children, industrial workers, SC/ST, and low-income citizens.',
    helpline: 'National Legal Aid Toll-Free Helpline: 15100',
    isPopular: true
  },
  {
    id: 'edaakhil',
    name: 'e-Daakhil Portal',
    category: 'Consumer Court',
    department: 'National Consumer Disputes Redressal Commission (NCDRC)',
    url: 'https://edaakhil.nic.in',
    description: 'Digital platform for filing formal consumer disputes before District, State, and National Consumer Commissions without physical court presence.',
    helpline: '011-24300661'
  },
  {
    id: 'myscheme',
    name: 'myScheme National Platform',
    category: 'Welfare Schemes',
    department: 'Ministry of Electronics and Information Technology (MeitY)',
    url: 'https://www.myscheme.gov.in',
    description: 'National single-window platform for discovering government schemes, benefits, subsidies, and eligibility criteria based on citizen demographics.',
    helpline: '1800-111-555',
    isPopular: true
  },
  {
    id: 'samadhan-labour',
    name: 'Samadhan Labour Conciliation Portal',
    category: 'Workplace Rights',
    department: 'Ministry of Labour and Employment',
    url: 'https://samadhan.labour.gov.in',
    description: 'Digital management system for industrial disputes, wage arrears, retrenchment complaints, and conciliation proceedings before Labour Officers.',
    helpline: '011-23710240'
  }
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Public Information Officer (PIO)',
    category: 'RTI',
    plainEnglish: 'The designated officer in every government office responsible by law for receiving RTI applications and supplying certified public records within 30 days.',
    exampleInContext: 'You should always address your RTI application directly to "The Public Information Officer (PIO)" of the relevant municipal or government department.'
  },
  {
    term: 'Show Cause Notice',
    category: 'Government Notices',
    plainEnglish: 'An official formal letter requiring you to explain or provide justification in writing why a proposed penalty, demolition, or disciplinary action should not be taken against you.',
    exampleInContext: 'A show cause notice gives you a statutory 15-day window to present your architectural approvals before any municipal action is initiated.'
  },
  {
    term: 'Audi Alteram Partem (Right to be Heard)',
    category: 'Legal Principles',
    plainEnglish: 'A fundamental rule of natural justice meaning "listen to the other side". No authority can pass an adverse judgment or penalty without giving the citizen a fair opportunity to defend themselves.',
    exampleInContext: 'Demolishing a structure without prior notice violates the constitutional principle of Audi Alteram Partem.'
  },
  {
    term: 'Unjust Enrichment',
    category: 'Tenant & Contract',
    plainEnglish: 'A legal concept where one person gains a financial benefit at the expense of another in an unfair manner without legal justification.',
    exampleInContext: 'A landlord retaining a security deposit after keys are returned without proving damage is guilty of unjust enrichment.'
  },
  {
    term: 'Ex-Parte Order',
    category: 'Civil Law',
    plainEnglish: 'A judicial or administrative decision passed in favor of one party when the other party failed to appear or reply after being notified.',
    exampleInContext: 'Always reply to official summons to prevent the authority from passing an ex-parte order in your absence.'
  },
  {
    term: 'Direct Benefit Transfer (DBT)',
    category: 'Schemes',
    plainEnglish: 'Transferring government subsidy or financial assistance directly into the beneficiary bank account linked to their Aadhaar card, eliminating middlemen.',
    exampleInContext: 'PM-KISAN payments are disbursed via DBT directly into the farmer’s savings account.'
  },
  {
    term: 'Deficiency of Service',
    category: 'Consumer Rights',
    plainEnglish: 'Any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance that is required to be maintained by law or contract.',
    exampleInContext: 'An airline taking 6 months to refund a flight cancelled by them constitutes a deficiency of service under consumer law.'
  }
];

export const civicFAQs: CivicFAQ[] = [
  {
    question: 'Can I file an RTI without going to a government office in person?',
    category: 'RTI',
    answer: 'Yes! For Central Government departments and many State Governments, you can file online at rtionline.gov.in. For offline departments, you can mail a printed application letter via Registered Speed Post along with a ₹10 Indian Postal Order (IPO) purchased from any post office.'
  },
  {
    question: 'What is the maximum time a landlord can hold my security deposit?',
    category: 'Tenant',
    answer: 'Under standard lease contracts and the Model Tenancy framework, the landlord should refund the security deposit within 30 days of receiving vacant physical possession and keys, after deducting mutually agreed utility bills or verified repairs.'
  },
  {
    question: 'Do I need to hire an expensive advocate to file a consumer complaint?',
    category: 'Consumer',
    answer: 'No. The Consumer Protection Act was specifically designed for ordinary citizens. You can file a grievance online for free on the National Consumer Helpline (1915) or submit a formal case on e-Daakhil without hiring a lawyer.'
  },
  {
    question: 'Who is eligible for Free Legal Aid in India?',
    category: 'Legal Aid',
    answer: 'Under Section 12 of the Legal Services Authorities Act (NALSA), all women, children, members of SC/ST communities, industrial workmen, persons with disabilities, victims of disasters, and individuals earning below state annual income thresholds (usually ₹3 Lakh) are entitled to free government-provided lawyers.'
  },
  {
    question: 'What should I do first if I receive a municipal penalty notice?',
    category: 'Notices',
    answer: '1. Note the exact delivery date (check the postal envelope). 2. Calculate the reply deadline. 3. Draft a polite, factual written reply attaching your approval documents. 4. Submit it in person at the inward counter and get an official rubber stamp with the inward number.'
  }
];
