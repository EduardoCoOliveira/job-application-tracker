import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ApplicationTimelineEntry,
  JobApplication,
} from '../models/application.model';

function timeline(
  entries: ApplicationTimelineEntry[],
): ApplicationTimelineEntry[] {
  return entries;
}

@Injectable({
  providedIn: 'root',
})
export class JobApplicationService {
  private readonly mockData: JobApplication[] = [
    {
      id: '1',
      company: 'Nubank',
      position: 'Senior Frontend Engineer',
      status: 'interview',
      modality: 'remote',
      appliedAt: '12 Mar 2026',
      nextAction: 'Review architecture stories before recruiter call',
      updatedAt: 'Today',
      source: 'Company careers page',
      jobUrl: 'https://nubank.com.br/careers/frontend-engineer',
      recruiterEmail: 'talent@nubank.com.br',
      notes:
        'Highlight design-system work, TypeScript ownership and measurable product impact.',
      summary:
        'Strong match for component architecture, platform work and frontend quality systems.',
      timeline: timeline([
        {
          date: '12 Mar',
          title: 'Application submitted',
          description:
            'Applied with portfolio focused on Angular architecture and shared component systems.',
        },
        {
          date: '18 Mar',
          title: 'Recruiter outreach',
          description:
            'Initial screening call scheduled after positive resume review.',
        },
        {
          date: '20 Mar',
          title: 'Interview confirmed',
          description:
            'Technical conversation booked with frontend platform team.',
        },
      ]),
    },
    {
      id: '2',
      company: 'Mercado Livre',
      position: 'Fullstack Developer',
      status: 'in_review',
      modality: 'hybrid',
      appliedAt: '25 Mar 2026',
      nextAction: 'Prepare portfolio follow-up with API examples',
      updatedAt: '2 days ago',
      city: 'Sao Paulo',
      source: 'Referral',
      jobUrl: 'https://mercadolivre.com/jobs/fullstack-developer',
      recruiterEmail: 'tech-hiring@mercadolivre.com',
      notes:
        'Emphasize Node.js APIs, SQL modeling and ability to move between backend and UI.',
      summary:
        'Good opportunity to show full-stack range with real product and data flows.',
      timeline: timeline([
        {
          date: '25 Mar',
          title: 'Application shared internally',
          description:
            'Referral forwarded with resume and selected project highlights.',
        },
        {
          date: '28 Mar',
          title: 'Profile under review',
          description:
            'Hiring team asked for availability window and salary expectations.',
        },
      ]),
    },
    {
      id: '3',
      company: 'Loft',
      position: 'Product Designer',
      status: 'interview',
      modality: 'remote',
      appliedAt: '08 Mar 2026',
      nextAction: 'Review product case and storytelling flow',
      updatedAt: 'Yesterday',
      source: 'LinkedIn',
      jobUrl: 'https://loft.com.br/carreiras/product-designer',
      recruiterEmail: 'design@loft.com.br',
      notes:
        'Prepare concise narrative around product decisions, user research and shipping constraints.',
      summary:
        'Visual and UX-heavy role that still rewards strong product reasoning and communication.',
      timeline: timeline([
        {
          date: '08 Mar',
          title: 'Applied with product case',
          description:
            'Submitted portfolio with end-to-end redesign case and validation metrics.',
        },
        {
          date: '15 Mar',
          title: 'Hiring manager review',
          description:
            'Case study requested with focus on prioritization and rationale.',
        },
        {
          date: '19 Mar',
          title: 'Interview round scheduled',
          description:
            'Conversation planned with design lead and product partner.',
        },
      ]),
    },
    {
      id: '4',
      company: 'iFood',
      position: 'UX Researcher',
      status: 'applied',
      modality: 'onsite',
      appliedAt: '02 Apr 2026',
      nextAction: 'Track inbox and recruiter updates',
      updatedAt: '10 days ago',
      city: 'Sao Paulo',
      source: 'Recruiter message',
      jobUrl: 'https://ifood.com.br/carreiras/ux-researcher',
      recruiterEmail: 'uxhiring@ifood.com.br',
      notes:
        'Would need to frame qualitative methods, synthesis process and collaboration with design/product.',
      summary:
        'Good stretch role to show research structure and clear communication of insights.',
      timeline: timeline([
        {
          date: '02 Apr',
          title: 'Application sent',
          description:
            'Resume and portfolio submitted after recruiter outreach.',
        },
      ]),
    },
    {
      id: '5',
      company: 'QuintoAndar',
      position: 'Product Designer Sr',
      status: 'offer',
      modality: 'hybrid',
      appliedAt: '20 Jan 2026',
      nextAction: 'Review compensation package and hybrid routine',
      updatedAt: '5 days ago',
      city: 'Sao Paulo',
      source: 'Company website',
      jobUrl: 'https://quintoandar.com.br/carreiras/product-designer',
      recruiterEmail: 'people@quintoandar.com.br',
      notes:
        'Compare responsibilities with current goals and assess room for growth in systems work.',
      summary:
        'Best-positioned opportunity so far, with clear interest from the team and strong alignment.',
      timeline: timeline([
        {
          date: '20 Jan',
          title: 'Application submitted',
          description:
            'Shared design portfolio, resume and concise introduction.',
        },
        {
          date: '30 Jan',
          title: 'Case study presentation',
          description:
            'Presented product thinking and systems approach to the design team.',
        },
        {
          date: '29 Apr',
          title: 'Offer received',
          description:
            'Formal offer sent pending final compensation review.',
        },
      ]),
    },
    {
      id: '6',
      company: 'CloudWalk',
      position: 'Software Engineer',
      status: 'rejected',
      modality: 'remote',
      appliedAt: '10 Feb 2026',
      nextAction: 'Archive notes and capture lessons learned',
      updatedAt: '28 Feb 2026',
      source: 'Company website',
      jobUrl: 'https://cloudwalk.io/careers/software-engineer',
      recruiterEmail: 'jobs@cloudwalk.io',
      notes:
        'Good interview practice for backend-heavy conversations; revisit distributed systems fundamentals.',
      summary:
        'Process ended, but the notes are useful for improving systems and API interview narratives.',
      timeline: timeline([
        {
          date: '10 Feb',
          title: 'Applied to role',
          description:
            'Applied with backend-focused project examples and API design notes.',
        },
        {
          date: '18 Feb',
          title: 'Technical screening',
          description:
            'Discussed APIs, testing, observability and scalability trade-offs.',
        },
        {
          date: '28 Feb',
          title: 'Rejected',
          description:
            'Team moved forward with a profile that had deeper distributed systems experience.',
        },
      ]),
    },
  ];

  getAllApplications(): Observable<JobApplication[]> {
    return of(this.mockData);
  }

  getApplicationById(id: string): Observable<JobApplication | undefined> {
    return of(this.mockData.find((application) => application.id === id));
  }

  getFeaturedApplication(): Observable<JobApplication | undefined> {
    return of(this.mockData[0]);
  }
}
