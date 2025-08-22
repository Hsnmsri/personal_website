import { Component, Input } from '@angular/core';
import Project from '../../core/models/Project.model';

@Component({
  selector: 'project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
