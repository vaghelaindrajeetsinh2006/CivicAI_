import { AnalysisResponse, ProblemCategory } from '../types';
import { mockPredefinedResponses } from '../data/mockResponses';

export interface AnalysisProgressStep {
  stage: number;
  message: string;
  detail: string;
}

export const analysisStages: AnalysisProgressStep[] = [
  {
    stage: 1,
    message: 'Reading and parsing your situation in plain English...',
    detail: 'Extracting key facts, timeline, affected parties, and dispute terms.'
  },
  {
    stage: 2,
    message: 'Identifying relevant civic, legal, and administrative jurisdiction...',
    detail: 'Classifying statutory frameworks, consumer rules, and regulatory bodies.'
  },
  {
    stage: 3,
    message: 'Synthesizing applicable citizen rights & required evidence...',
    detail: 'Checking evidentiary documentation checklists and statutory notice guidelines.'
  },
  {
    stage: 4,
    message: 'Constructing your step-by-step action plan & authority routing...',
    detail: 'Finalizing dispute resolution pathways and drafting templates.'
  }
];

export async function analyzeCitizenProblem(
  problemText: string,
  preferredCategory?: string,
  onProgress?: (stageIndex: number) => void
): Promise<AnalysisResponse> {
  const text = (problemText || '').toLowerCase();

  // Progress simulation steps
  const totalStages = analysisStages.length;
  for (let i = 0; i < totalStages; i++) {
    if (onProgress) {
      onProgress(i);
    }
    // Subtle delay per stage for realistic AI feel (approx 350-450ms each)
    await new Promise((resolve) => setTimeout(resolve, 380));
  }

  // 1. Check if user selected an explicit category or if text matches standard domains
  let detectedCategory: ProblemCategory = 'General Civic & Legal';

  const isTenant =
    preferredCategory === 'Tenant Rights' ||
    /(landlord|tenant|rent|security deposit|deposit|lease|evict|flat|apartment|vacat|house owner|brokerage)/i.test(text);

  const isRTI =
    preferredCategory === 'Right to Information (RTI)' ||
    preferredCategory === 'RTI' ||
    /(rti|right to information|public record|tender|budget|expenditure|fund allocation|certified copy|pio|contractor details|ward spending)/i.test(text);

  const isConsumer =
    preferredCategory === 'Consumer Rights' ||
    /(consumer|defect|warranty|refund|repair|replacement|product|appliance|seller|flipkart|amazon|e-commerce|overcharg|invoice|service center|cheated)/i.test(text);

  const isScheme =
    preferredCategory === 'Government Schemes' ||
    /(scheme|subsidy|pension|eligible|eligibility|qualify|pmay|ayushman|pm-jay|kisan|dbt|financial assistance|welfare|bpl|ration card)/i.test(text);

  const isCivic =
    preferredCategory === 'Civic Issues' ||
    /(garbage|drain|drainage|sewage|streetlight|street light|pothole|road repair|sanitation|municipal|corporation|ward|water supply|pollution)/i.test(text);

  const isWorkplace =
    preferredCategory === 'Workplace Rights' ||
    /(salary|wages|employer|company|boss|fired|termination|unpaid|resignation|relieving|experience letter|overtime|harassment|hr|pf|provident fund)/i.test(text);

  const isNotice =
    preferredCategory === 'Government Notices' ||
    /(notice|show cause|demolition|penalty|summons|challan|unauthorized|building violation|encroachment|tax arrears)/i.test(text);

  // Return best matched response with dynamic custom prompt embedding
  let baseResponse: AnalysisResponse;

  if (isTenant) {
    baseResponse = { ...mockPredefinedResponses.tenant };
    detectedCategory = 'Tenant Rights';
  } else if (isRTI) {
    baseResponse = { ...mockPredefinedResponses.rti };
    detectedCategory = 'Right to Information (RTI)';
  } else if (isConsumer) {
    baseResponse = { ...mockPredefinedResponses.consumer };
    detectedCategory = 'Consumer Rights';
  } else if (isScheme) {
    baseResponse = { ...mockPredefinedResponses.schemes };
    detectedCategory = 'Government Schemes';
  } else if (isCivic) {
    baseResponse = { ...mockPredefinedResponses.civic };
    detectedCategory = 'Civic Issues';
  } else if (isWorkplace) {
    baseResponse = { ...mockPredefinedResponses.workplace };
    detectedCategory = 'Workplace Rights';
  } else if (isNotice) {
    baseResponse = { ...mockPredefinedResponses.notices };
    detectedCategory = 'Government Notices';
  } else {
    // Dynamic fallback for custom citizen problem
    detectedCategory = 'General Civic & Legal';
    baseResponse = {
      id: `resp-custom-${Date.now()}`,
      createdAt: new Date().toISOString(),
      rawInput: problemText,
      category: detectedCategory,
      categoryIcon: 'Scale',
      issueBadge: 'General Administrative Grievance',
      summary: `Citizen seeking assistance regarding: "${problemText.length > 80 ? problemText.slice(0, 77) + '...' : problemText}"`,
      simpleExplanation: 'Based on the facts provided, your situation appears to involve an administrative or civil matter that can be addressed through systematic formal communication, preservation of transaction evidence, and engagement with designated regulatory or grievance portals.',
      keyTakeaway: 'You have the right to request a written reason or formal redressal from the relevant authority or provider before initiating formal litigation.',
      possibleRights: [
        {
          id: 'gen-1',
          title: 'Right to Natural Justice & Fair Hearing',
          explanation: 'Public bodies and service providers are duty-bound to consider citizen representations and provide reasoned decisions.',
          legalReference: 'Administrative Law Principles & Article 14 of the Constitution',
        },
        {
          id: 'gen-2',
          title: 'Right to Transparent Communication & Documentation',
          explanation: 'You are entitled to written records, itemized accounts, or acknowledgment receipts of any claim or complaint made.',
          legalReference: 'Citizen Charter & Service Delivery Guidelines',
        },
        {
          id: 'gen-3',
          title: 'Access to Free Legal Assistance (NALSA)',
          explanation: 'If financial hardship prevents accessing legal advice, you can seek free guidance through District Legal Services Authorities.',
          legalReference: 'Legal Services Authorities Act, 1987',
        }
      ],
      documents: [
        {
          id: 'gen-doc-1',
          name: 'Written Chronological Timeline of Events',
          whyUseful: 'Helps summarize key dates, agreements, notices, and interactions clearly.'
        },
        {
          id: 'gen-doc-2',
          name: 'Payment Proofs / Receipts / Contracts',
          whyUseful: 'Establishes lawful transaction basis and reciprocal obligations.'
        },
        {
          id: 'gen-doc-3',
          name: 'Prior Written Reminders / Emails / SMS Records',
          whyUseful: 'Demonstrates honest attempts to resolve the matter cordially before escalating.'
        }
      ],
      authority: {
        name: 'District Grievance Redressal Cell / CPGRAMS / DLSA',
        type: 'Public Grievance & Legal Services Forum',
        jurisdiction: 'District Administrative Office / Central Public Grievance Portal',
        officialPortalUrl: 'https://pgportal.gov.in',
        description: 'Designated administrative authority for general citizen grievances and pre-litigation mediation.',
        recommendedAction: 'Send a formal written notice first, followed by registration on the CPGRAMS national grievance portal if unresolved.'
      },
      actionPlan: [
        {
          stepNumber: 1,
          title: 'Compile and Organize All Relevant Documentation',
          description: 'Gather all contracts, receipts, identity proofs, and chronological message exchanges.',
          timeline: 'Day 1–2',
          actionableTip: 'Maintain clean digital copies organized by date.'
        },
        {
          stepNumber: 2,
          title: 'Send a Formal Written Communication / Notice',
          description: 'Send a polite, factual written letter outlining your problem, citing your documents, and requesting a resolution within 10–15 business days.',
          timeline: 'Day 3–5',
          actionableTip: 'Send via Registered Speed Post and retain the postal delivery receipt.'
        },
        {
          stepNumber: 3,
          title: 'Lodge Grievance on CPGRAMS / National Portal',
          description: 'If ignored, register an official grievance on pgportal.gov.in referencing the department or provider involved.',
          timeline: 'Day 16–25',
          actionableTip: 'Save your grievance registration number for live status tracking.'
        },
        {
          stepNumber: 4,
          title: 'Seek Guidance from Free Legal Services (DLSA)',
          description: 'Visit the District Court complex or call 15100 to consult a designated Legal Services advocate.',
          timeline: 'Day 30+',
          actionableTip: 'DLSA assistance is free for qualifying categories including women, workers, and low-income citizens.'
        }
      ],
      disclaimer: 'This informational overview provides preliminary structured guidance and does not constitute formal legal representation. Verify terms with designated authorities.',
      suggestedDraftType: 'general_notice'
    };
  }

  // Clone and enrich with the actual user's raw input
  const response: AnalysisResponse = {
    ...baseResponse,
    id: `resp-${Date.now()}`,
    createdAt: new Date().toISOString(),
    rawInput: problemText.trim(),
  };

  return response;
}
