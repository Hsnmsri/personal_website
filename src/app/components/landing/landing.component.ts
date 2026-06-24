import { Component, HostListener } from '@angular/core';
import Database from '../../core/models/Database.model';
import { LoadingService } from '../../core/services/loading/loading.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ExperienceWithSectionComponent } from '../experience-with-section/experience-with-section.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactUsSectionComponent } from '../contact-us-section/contact-us-section.component';
import { BlogSectionComponent } from '../blog-section/blog-section.component';
import { SideNavigatorComponent } from "../side-navigator/side-navigator.component";

@Component({
  selector: 'app-landing',
  imports: [
    NavbarComponent,
    BackToTopComponent,
    HeroSectionComponent,
    ExperienceWithSectionComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    FooterComponent,
    ContactUsSectionComponent,
    BlogSectionComponent,
    SideNavigatorComponent
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  backToTopVisibility: boolean = false;
  database: Database = { experiences: [], projects: [] };


  constructor(private loadingService: LoadingService) {
    loadingService.setVisibility(true);
  }

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loadingService.setVisibility(false);
      }, 1300);
      setTimeout(() => {
        document.body.style.overflow = 'visible';
      }, 3500);
    })
  }

  initBackToTop() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.backToTopVisibility = scrollY > 200;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.initBackToTop();
  }
}
