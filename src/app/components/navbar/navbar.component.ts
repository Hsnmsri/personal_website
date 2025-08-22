import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuVisibility: boolean = false;

  constructor() {
    this.checkMenuVisibility();
  }

  @HostListener('window:resize')
  checkMenuVisibility() {
    this.menuVisibility = window.innerWidth > 768
  }
}
