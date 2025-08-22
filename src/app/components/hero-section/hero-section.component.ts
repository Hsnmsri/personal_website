import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  isMobile: boolean = false;
  descriptionFullVisibility: boolean = false;

  constructor() {
    this.initSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.initSize();
  }

  initSize() {
    this.isMobile = window.innerWidth < 768;
    this.descriptionFullVisibility = !this.isMobile;
  }
}
