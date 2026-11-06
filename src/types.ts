export type Dimension = 'engineer' | 'marketer' | 'entrepreneur';

export type ProjectClassification = 
  | 'active'
  | 'deeply-planned'
  | 'proposal'
  | 'employer'
  | 'experiment';

export type ProjectStatus = 
  | 'Idea' 
  | 'Research' 
  | 'Proposal' 
  | 'Planning' 
  | 'Prototype' 
  | 'Development' 
  | 'Testing' 
  | 'Launched' 
  | 'On Hold' 
  | 'Archived';

export interface ProjectMilestone {
  date: string;
  event: string;
  completed: boolean;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
  details: string;
}

export interface ProjectDocument {
  title: string;
  type: string;
  size?: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  classification: ProjectClassification;
  status: ProjectStatus;
  period: string;
  role: string;
  ownershipContext: string;
  dimensions: Dimension[];
  shortDescription: string;
  overview: string;
  inspiration: string;
  problemStatement: string;
  visionObjectives: string;
  targetAudience: string;
  proposedSolution: string;
  features: string[];
  techArchitecture?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    cloudOps?: string[];
    apis?: string[];
    hardware?: string[];
  };
  businessModel?: string;
  marketResearch?: string;
  roadmap: RoadmapItem[];
  finalizedDecisions: string[];
  unresolvedQuestions: string[];
  risksAndChallenges: string[];
  timelineMilestones: ProjectMilestone[];
  futurePossibilities: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  relatedDocs?: ProjectDocument[];
}

export interface Experience {
  id: string;
  organization: string;
  position: string;
  period: string;
  duration?: string;
  location?: string;
  type: 'Venture / Leadership' | 'Employment' | 'Internship / Role';
  ownershipContext: string;
  dimensions: Dimension[];
  summary: string;
  responsibilities: string[];
  projectsAssociated: string[];
  achievements: string[];
  tags: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  status: 'Verified' | 'Credential on File' | 'Available on Request';
  skillsCovered: string[];
  description: string;
  badgeAccent: 'saffron' | 'green' | 'white';
}

export interface Education {
  institution: string;
  degree: string;
  major: string;
  specialization: string;
  period: string;
  location: string;
  currentStatus: string;
  keyFocus: string[];
  academicHighlights: string[];
}

export interface SkillCategory {
  title: string;
  dimension: Dimension | 'general';
  accent: 'saffron' | 'green' | 'white';
  skills: {
    name: string;
    level: string;
    tags: string[];
    description?: string;
  }[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  category: 'venture' | 'education' | 'experience' | 'certification' | 'milestone';
  description: string;
  dimension: Dimension | 'all';
}

export interface ResearchItem {
  id: string;
  title: string;
  category: 'Architecture' | 'Marketing Playbook' | 'Business Proposal' | 'Technical Whitepaper';
  date: string;
  status: 'Public Archive' | 'Confidential / On Request' | 'Proposal Draft';
  abstract: string;
  keyFindings: string[];
  tags: string[];
}
