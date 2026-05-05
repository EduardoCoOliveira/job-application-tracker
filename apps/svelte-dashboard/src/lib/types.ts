export type ApplicationStatus =
  | 'saved'
  | 'applied'
  | 'interview'
  | 'in_review'
  | 'offer'
  | 'rejected'
  | 'approved';

export type ModalityStatus = 'onsite' | 'remote' | 'hybrid';

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
  summary: string;
}
