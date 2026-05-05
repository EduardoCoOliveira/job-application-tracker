import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  ApplicationStatus,
  ModalityStatus,
} from '../../models/application.model';
import {
  CreateApplicationInput,
  JobApplicationService,
} from '../../services/application.service';

interface DraftApplication {
  company: string;
  position: string;
  status: ApplicationStatus;
  modality: ModalityStatus;
  jobUrl: string;
  notes: string;
  recruiterEmail: string;
}

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  draft: DraftApplication = {
    company: 'Ollama Labs',
    position: 'Front-end Intern',
    status: 'interview',
    modality: 'remote',
    jobUrl: 'https://empresa.com/vaga/frontend-intern',
    notes:
      'Priorizar narrativa sobre componentes reutilizáveis, consumo de API e diferenças entre Angular e Svelte.',
    recruiterEmail: 'recruiter@empresa.com',
  };

  isSaving = false;

  constructor(
    private readonly jobApplicationService: JobApplicationService,
    private readonly router: Router,
  ) {}

  saveDraft(): void {
    this.isSaving = true;

    const created = this.jobApplicationService.createApplication(
      this.draft as CreateApplicationInput,
    );

    this.router.navigate(['/details', created.id]);
  }

  getStatusLabel(status: ApplicationStatus): string {
    const labels: Record<ApplicationStatus, string> = {
      saved: 'Salva',
      applied: 'Aplicado',
      in_review: 'Em análise',
      interview: 'Entrevista',
      offer: 'Oferta',
      rejected: 'Rejeitado',
      approved: 'Aprovado',
    };

    return labels[status];
  }

  getModalityLabel(modality: ModalityStatus): string {
    const labels: Record<ModalityStatus, string> = {
      onsite: 'Presencial',
      remote: 'Remoto',
      hybrid: 'Híbrido',
    };

    return labels[modality];
  }
}
