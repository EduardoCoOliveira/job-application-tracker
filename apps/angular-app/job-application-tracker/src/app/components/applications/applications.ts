import { Component, OnInit } from '@angular/core';
import { JobApplication } from '../../models/application.model';
import { JobApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-applications',
  imports: [],
  templateUrl: './applications.html',
  styleUrl: './applications.css',
})
export class Applications implements OnInit {
  applications: JobApplication[] = [];

  constructor(private jobApplicationService: JobApplicationService) {}

  ngOnInit(): void {
    this.jobApplicationService.getAllApplications().subscribe((data) => {
      this.applications = data;
    });
  }
}
