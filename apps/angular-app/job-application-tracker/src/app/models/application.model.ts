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

// Base shape used by the applications list and later by details/register flows.
export interface JobApplication {
  id: string;
  company: string;
  position: string;
  status: ApplicationStatus;
  modality: ModalityStatus;
  nextAction: string;
  updatedAt: string;
}
