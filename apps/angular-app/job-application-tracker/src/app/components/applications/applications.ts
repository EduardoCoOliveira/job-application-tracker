import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ApplicationStatus,
  JobApplication,
  ModalityStatus,
} from '../../models/application.model';
import { JobApplicationService } from '../../services/application.service';

type SortOption = 'recent' | 'oldest' | 'company';

@Component({
  selector: 'app-applications',
  imports: [FormsModule, RouterLink],
  templateUrl: './applications.html',
  styleUrl: './applications.css',
})
export class Applications implements OnInit {
  applications: JobApplication[] = [];
  searchQuery = '';
  statusFilter: ApplicationStatus | 'all' = 'all';
  modalityFilter: ModalityStatus | 'all' = 'all';
  sortBy: SortOption = 'recent';

  constructor(private readonly jobApplicationService: JobApplicationService) {}

  ngOnInit(): void {
    this.jobApplicationService.getAllApplications().subscribe((data) => {
      this.applications = data;
    });
  }

  get filteredApplications(): JobApplication[] {
    const normalizedQuery = this.searchQuery.trim().toLowerCase();

    return [...this.applications]
      .filter((application) => {
        const matchesQuery =
          normalizedQuery.length === 0 ||
          application.company.toLowerCase().includes(normalizedQuery) ||
          application.position.toLowerCase().includes(normalizedQuery);

        const matchesStatus =
          this.statusFilter === 'all' ||
          application.status === this.statusFilter;

        const matchesModality =
          this.modalityFilter === 'all' ||
          application.modality === this.modalityFilter;

        return matchesQuery && matchesStatus && matchesModality;
      })
      .sort((left, right) => this.compareApplications(left, right));
  }

  get activeApplicationsCount(): number {
    return this.applications.filter(
      (application) =>
        application.status !== 'rejected' && application.status !== 'offer',
    ).length;
  }

  get interviewApplicationsCount(): number {
    return this.applications.filter(
      (application) => application.status === 'interview',
    ).length;
  }

  get responseThisWeekCount(): number {
    return this.applications.filter((application) =>
      ['Today', 'Yesterday', '2 days ago'].includes(application.updatedAt),
    ).length;
  }

  get todayActionCount(): number {
    return this.applications.filter(
      (application) =>
        application.updatedAt === 'Today' ||
        application.nextAction.toLowerCase().includes('today'),
    ).length;
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

  getModalityLabel(application: JobApplication): string {
    const modalityLabels: Record<ModalityStatus, string> = {
      onsite: 'Presencial',
      remote: 'Remoto',
      hybrid: 'Híbrido',
    };

    return application.city
      ? `${modalityLabels[application.modality]} · ${application.city}`
      : modalityLabels[application.modality];
  }

  private compareApplications(
    left: JobApplication,
    right: JobApplication,
  ): number {
    if (this.sortBy === 'company') {
      return left.company.localeCompare(right.company);
    }

    const leftIndex = this.applications.findIndex(
      (application) => application.id === left.id,
    );
    const rightIndex = this.applications.findIndex(
      (application) => application.id === right.id,
    );

    if (this.sortBy === 'oldest') {
      return leftIndex - rightIndex;
    }

    return rightIndex - leftIndex;
  }
}
