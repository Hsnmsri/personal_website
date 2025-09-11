import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogComponent } from "../blog/blog.component";
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled: boolean = false;
  menuVisibility: boolean = false;

  constructor() {
    this.checkMenuVisibility();
  }

  // ON SCROLL HANDLER
  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  // ON RESIZE HANDLER
  @HostListener('window:resize')
  checkMenuVisibility() {
    this.menuVisibility = window.innerWidth > 768
  }
}
