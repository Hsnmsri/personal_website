import { Component, Input } from '@angular/core';

@Component({
  selector: 'back-to-top',
  imports: [],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
  @Input() to: string | null = null;
}
