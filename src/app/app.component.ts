import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import WindowSize from '../core/models/WindowSize.model';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  windowSize: WindowSize = { width: '100%', height: '100%' };

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.windowSize.width = `${window.innerWidth}px`;
    this.windowSize.height = `${window.innerHeight}px`;
  }
}
