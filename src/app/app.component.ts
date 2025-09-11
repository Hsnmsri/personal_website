import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import WindowSize from './core/models/WindowSize.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('appContainer') appContainer!: ElementRef<HTMLDivElement>;
  windowSize: WindowSize = { width: '100vw', height: '100vh' };

  constructor() { }

  ngAfterViewInit(): void {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateWindowSize();
  }

  /**
   *  Updates the window size based on the current viewport dimensions.
   */
  updateWindowSize() {
    this.windowSize.width = `${window.innerWidth}px`;
    this.windowSize.height = `${window.innerHeight}px`;
    this.appContainer.nativeElement.style.width = '100%';
    this.appContainer.nativeElement.style.height = this.windowSize.height;
  }
}
