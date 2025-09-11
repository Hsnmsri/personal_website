import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-blog-nav',
  imports: [
    RouterLink,
    LogoComponent
],
  templateUrl: './blog-nav.component.html',
  styleUrl: './blog-nav.component.scss'
})
export class BlogNavComponent {
  menuVisibility: boolean = false;

  constructor() {
    this.checkMenuVisibility();
  }

  @HostListener('window:resize')
  checkMenuVisibility() {
    this.menuVisibility = window.innerWidth > 768
  }
}
