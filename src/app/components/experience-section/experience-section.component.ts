import { Component } from '@angular/core';
import { ExperienceCardComponent } from "../experience-card/experience-card.component";
import Experience from '../../core/models/Experience.model';
import { Subscription } from 'rxjs';
import { DatabaseService } from '../../core/services/database/database.service';
import Database from '../../core/models/Database.model';

@Component({
  selector: 'experience-section',
  imports: [ExperienceCardComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss'
})
export class ExperienceSectionComponent {
  experiences: { data: Experience[]; sub: Subscription | null } = { data: [], sub: null };

  constructor(private readonly databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.experiences.sub = this.databaseService.getDatabase$().subscribe((database) => {
      if (database) {
        this.experiences.data = database.experiences;
      }
    })
  }

  ngOnDestroy(): void {
    this.experiences.sub?.unsubscribe();
  }
}
