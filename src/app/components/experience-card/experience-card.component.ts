import { Component, Input } from '@angular/core';
import Experience from '../../core/models/Experience.model';

@Component({
  selector: 'experience-card',
  imports: [],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
  @Input() experience!: Experience;
}
