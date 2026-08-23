import { Scheme } from '../types';

export const governmentSchemes: Scheme[] = [
  {
    id: 'pm-ayushman-bharat',
    name: 'Ayushman Bharat — Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
    department: 'National Health Authority (NHA) / Ministry of Health',
    category: 'Healthcare',
    overview: 'World’s largest government-funded health assurance scheme providing comprehensive secondary and tertiary care hospitalization coverage.',
    benefits: 'Cashless healthcare coverage of up to ₹5,00,000 per family per year across empaneled public and private hospitals nationwide.',
    minAge: 0,
    maxAge: 100,
    maxIncome: 300000,
    eligibleOccupations: ['Daily Wage Worker', 'Agricultural Laborer', 'Informal Worker', 'Domestic Worker', 'Artisan', 'Unemployed', 'General Public'],
    eligibleCategories: ['SECC Listed', 'BPL', 'EWS', 'SC', 'ST', 'OBC', 'General Low Income'],
    requiredDocuments: [
      'Aadhaar Card of all family members',
      'Ration Card / Family ID document',
      'Mobile number linked to Aadhaar'
    ],
    applicationMode: 'Both Online & Offline',
    officialPortalName: 'PM-JAY Official Portal',
    officialPortalUrl: 'https://mera.pmjay.gov.in'
  },
  {
    id: 'pm-awas-yojana',
    name: 'Pradhan Mantri Awas Yojana (PMAY — Urban / Gramin)',
    department: 'Ministry of Housing and Urban Affairs / Ministry of Rural Development',
    category: 'Housing',
    overview: 'Flagship mission to provide all-weather pucca houses with basic amenities (water, sanitation, electricity) to eligible urban and rural families.',
    benefits: 'Direct financial subsidy of ₹1.20 Lakh to ₹2.67 Lakh upfront interest subsidy on home loans for construction or purchase.',
    minAge: 18,
    maxAge: 70,
    maxIncome: 600000,
    eligibleOccupations: ['Daily Wage Worker', 'Salaried Worker', 'Self Employed', 'Farmer', 'Informal Worker'],
    eligibleCategories: ['EWS', 'LIG', 'MIG-I', 'BPL', 'Women Head of Household'],
    requiredDocuments: [
      'Aadhaar Card & PAN Card',
      'Income Certificate / Salary Slip',
      'Bank Account Passbook (Aadhaar linked)',
      'Affidavit stating applicant does not own a pucca house anywhere in India',
      'Land Ownership / Title deed (for rural construction)'
    ],
    applicationMode: 'Both Online & Offline',
    officialPortalName: 'PMAY Urban / AwaasSoft Portal',
    officialPortalUrl: 'https://pmaymis.gov.in'
  },
  {
    id: 'pm-kisan-samman-nidhi',
    name: 'PM Kisan Samman Nidhi (PM-KISAN)',
    department: 'Ministry of Agriculture and Farmers Welfare',
    category: 'Agriculture',
    overview: 'Income support scheme for all landholding farmer families across India to supplement their agricultural input needs.',
    benefits: 'Direct cash transfer of ₹6,000 per year distributed in 3 equal four-monthly installments of ₹2,000 each directly into bank accounts via DBT.',
    minAge: 18,
    maxAge: 85,
    maxIncome: 500000,
    eligibleOccupations: ['Farmer', 'Small & Marginal Landholder', 'Agricultural Cultivator'],
    eligibleCategories: ['Small & Marginal Farmers', 'All Categories'],
    requiredDocuments: [
      'Aadhaar Card (Mandatory biometric e-KYC)',
      'Land Record / Khasra-Khatauni (Land ownership document)',
      'Aadhaar-seeded Active Bank Account details'
    ],
    applicationMode: 'Both Online & Offline',
    officialPortalName: 'PM-KISAN Portal',
    officialPortalUrl: 'https://pmkisan.gov.in'
  },
  {
    id: 'pm-svanidhi',
    name: 'PM Street Vendor’s AtmaNirbhar Nidhi (PM SVANidhi)',
    department: 'Ministry of Housing and Urban Affairs',
    category: 'Financial & Pension',
    overview: 'Micro-credit scheme providing working capital loans to urban street vendors, hawkers, and informal sellers.',
    benefits: 'Collateral-free working capital loan starting at ₹10,000 (1st tranche), ₹20,000 (2nd tranche), and up to ₹50,000 (3rd tranche) with 7% interest subsidy and cashback on digital transactions.',
    minAge: 18,
    maxAge: 70,
    maxIncome: 400000,
    eligibleOccupations: ['Street Vendor', 'Hawker', 'Cart Seller', 'Artisan', 'Small Service Provider'],
    eligibleCategories: ['Urban Street Vendors', 'Semi-Urban Vendors'],
    requiredDocuments: [
      'Aadhaar Card',
      'Certificate of Vending / Urban Local Body (ULB) Identity Card / Letter of Recommendation (LoR)',
      'Bank Account Passbook'
    ],
    applicationMode: 'Both Online & Offline',
    officialPortalName: 'PM SVANidhi Portal',
    officialPortalUrl: 'https://pmsvanidhi.mohua.gov.in'
  },
  {
    id: 'atal-pension-yojana',
    name: 'Atal Pension Yojana (APY)',
    department: 'Pension Fund Regulatory and Development Authority (PFRDA) / Ministry of Finance',
    category: 'Financial & Pension',
    overview: 'Guaranteed pension scheme specifically focused on unorganized sector workers and self-employed citizens to provide old-age financial security.',
    benefits: 'Guaranteed monthly pension between ₹1,000 to ₹5,000 per month starting at age 60, with spouse pension continuation and corpus return to nominee.',
    minAge: 18,
    maxAge: 40,
    maxIncome: 800000,
    eligibleOccupations: ['Unorganized Sector Worker', 'Gig Worker', 'Freelancer', 'Small Business Owner', 'Any Citizen (Non-income tax payer)'],
    eligibleCategories: ['All Non-Tax Paying Citizens between 18-40 years'],
    requiredDocuments: [
      'Aadhaar Card',
      'Active Savings Bank Account with auto-debit facility',
      'Active Mobile number for SMS alerts'
    ],
    applicationMode: 'Both Online & Offline',
    officialPortalName: 'National Pension System (NPS) / NSDL',
    officialPortalUrl: 'https://www.npscra.nsdl.co.in'
  },
  {
    id: 'pm-ujjwala-yojana',
    name: 'Pradhan Mantri Ujjwala Yojana 2.0 (PMUY)',
    department: 'Ministry of Petroleum and Natural Gas',
    category: 'Housing',
    overview: 'Clean cooking fuel initiative providing free LPG gas connections and stoves to women from low-income households.',
    benefits: 'Deposit-free LPG connection, first refill free of charge, and free double-burner hotplate/stove, plus regular per-cylinder subsidy via DBT.',
    minAge: 18,
    maxAge: 85,
    maxIncome: 250000,
    eligibleOccupations: ['Homemaker', 'Daily Wage Worker', 'Rural Worker', 'Agricultural Laborer'],
    eligibleCategories: ['Adult Women from BPL / EWS / SC / ST / PMAY beneficiaries / Forest Dwellers'],
    requiredDocuments: [
      'Aadhaar Card of adult female applicant and adult family members',
      'Ration Card / 14-Point Declaration of Family Composition',
      'Bank Account Passbook (Aadhaar linked)'
    ],
    applicationMode: 'Both Online & Offline',
    officialPortalName: 'PMUY 2.0 Portal',
    officialPortalUrl: 'https://www.pmuy.gov.in'
  }
];
