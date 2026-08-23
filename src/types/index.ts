export type ProblemCategory =
  | 'Tenant Rights'
  | 'Right to Information (RTI)'
  | 'Consumer Rights'
  | 'Government Schemes'
  | 'Civic Issues'
  | 'Workplace Rights'
  | 'Government Notices'
  | 'General Civic & Legal';

export interface PossibleRight {
  id: string;
  title: string;
  explanation: string;
  legalReference?: string;
  confidenceNote?: string;
}

export interface RequiredDocument {
  id: string;
  name: string;
  whyUseful: string;
  optional?: boolean;
  alternatives?: string;
}

export interface ActionStep {
  stepNumber: number;
  title: string;
  description: string;
  timeline?: string;
  actionableTip?: string;
  isComplete?: boolean;
}

export interface RelevantAuthority {
  name: string;
  type: string;
  jurisdiction: string;
  officialPortalUrl?: string;
  description: string;
  recommendedAction: string;
}

export interface AnalysisResponse {
  id: string;
  createdAt: string;
  rawInput: string;
  category: ProblemCategory;
  categoryIcon: string;
  issueBadge: string;
  summary: string;
  simpleExplanation: string;
  keyTakeaway: string;
  possibleRights: PossibleRight[];
  documents: RequiredDocument[];
  authority: RelevantAuthority;
  actionPlan: ActionStep[];
  disclaimer: string;
  suggestedDraftType?: string;
}

export interface Scheme {
  id: string;
  name: string;
  department: string;
  category: 'Housing' | 'Agriculture' | 'Financial & Pension' | 'Healthcare' | 'Education' | 'Employment';
  overview: string;
  benefits: string;
  minAge?: number;
  maxAge?: number;
  maxIncome?: number;
  eligibleOccupations?: string[];
  eligibleCategories?: string[];
  requiredDocuments: string[];
  applicationMode: 'Online' | 'Offline / Common Service Center (CSC)' | 'Both Online & Offline';
  officialPortalName: string;
  officialPortalUrl: string;
}

export interface RightCategoryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  badge: string;
  commonProblems: string[];
  coreRights: {
    title: string;
    section: string;
    detail: string;
  }[];
  standardDocuments: string[];
  resolutionPath: string[];
  sampleQuery: string;
}

export interface RTIDraftData {
  applicantName: string;
  applicantAddress: string;
  applicantPhone: string;
  applicantEmail: string;
  isBPL: boolean;
  bplCardNumber?: string;
  targetDepartment: string;
  subject: string;
  informationPoints: string[];
  timePeriod: string;
  stateOrCentral: 'Central Government' | 'State Government';
  stateName?: string;
}
