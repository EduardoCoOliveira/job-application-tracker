import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JobApplication } from '../models/application.model';

@Injectable({
  providedIn: 'root',
})

//Classe de serviço para fornecer os dados de candidaturas com dados mockados
export class JobApplicationService {
  private mockData: JobApplication[] = [
    {
      id: '1',
      company: 'Nubank',
      position: 'Senior Frontend Engineer',
      status: 'interview',
      modality: 'remote',
      nextAction: 'Wait for recruiter feedback',
      updatedAt: 'Today',
    },
    {
      id: '2',
      company: 'Mercado Livre',
      position: 'Fullstack Developer',
      status: 'in_review',
      modality: 'hybrid',
      nextAction: 'Prepare portfolio follow-up',
      updatedAt: '2 days ago',
    },
    {
      id: '3',
      company: 'Loft',
      position: 'Product Designer',
      status: 'interview',
      modality: 'remote',
      nextAction: 'Review product case notes',
      updatedAt: 'Yesterday',
    },
    {
      id: '4',
      company: 'iFood',
      position: 'UX Researcher',
      status: 'applied',
      modality: 'onsite',
      nextAction: 'Track email updates',
      updatedAt: '10 days ago',
    },
  ];

  //método para retornar os dados mockados como um Observable, simulando uma chamada de API
  getAllApplications(): Observable<JobApplication[]> {
    return of(this.mockData);
  }
}
