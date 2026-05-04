import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ApplicationStatus,
  ModalityStatus,
} from '../../models/application.model';

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
      'Priorizar narrativa sobre componentes reutilizaveis, consumo de API e diferencas entre Angular e Svelte.',
    recruiterEmail: 'recruiter@empresa.com',
  };

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
