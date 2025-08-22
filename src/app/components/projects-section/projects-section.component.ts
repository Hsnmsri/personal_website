import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import Project from '../../core/models/Project.model';
import { Subscription } from 'rxjs';
import { DatabaseService } from '../../core/services/database/database.service';

@Component({
  selector: 'projects-section',
  imports: [ProjectCardComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  projects: { data: Project[]; sub: Subscription | null } = { data: [], sub: null };

  constructor(private readonly databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.projects.sub = this.databaseService.getDatabase$().subscribe((database) => {
      if (database) {
        this.projects.data = database.projects;
      }
    })
  }

  ngOnDestroy(): void {
    this.projects.sub?.unsubscribe();
  }
}
