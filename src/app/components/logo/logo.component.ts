import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  @Input() title?: string;
  @Input() width: number = 130;
  @Input() height: number = 25;
  @Input() fillColor: string = "#FF9100";
}
