import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  ApplicationStatus,
  JobApplication,
  ModalityStatus,
} from '../../models/application.model';
import { JobApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  application?: JobApplication;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly jobApplicationService: JobApplicationService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '1';

    this.jobApplicationService.getApplicationById(id).subscribe((application) => {
      this.application = application;
    });
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
