// Internal status values stay in English for consistency in code and to avoid encoding issues.
export type ApplicationStatus =
  | 'saved'
  | 'applied'
  | 'interview'
  | 'in_review'
  | 'offer'
  | 'rejected'
  | 'approved';

export type ModalityStatus = 'onsite' | 'remote' | 'hybrid';

export interface ApplicationTimelineEntry {
  date: string;
  title: string;
  description: string;
}

export interface JobApplication {
  id: string;
  company: string;
  position: string;
  status: ApplicationStatus;
  modality: ModalityStatus;
  appliedAt: string;
  nextAction: string;
  updatedAt: string;
  city?: string;
  source: string;
  jobUrl: string;
  recruiterEmail?: string;
  notes: string;
  summary: string;
  timeline: ApplicationTimelineEntry[];
}
