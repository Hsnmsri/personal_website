import { Component, HostListener } from '@angular/core';
import WindowSize from './core/models/WindowSize.model';
import { NavbarComponent } from "./components/navbar/navbar.component";
import axios from 'axios';
import Database from './core/models/Database.model';
import { LoadingComponent } from "./components/loading/loading.component";
import { LoadingService } from './core/services/loading/loading.service';
import { BackToTopComponent } from "./components/back-to-top/back-to-top.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { ExperienceWithSectionComponent } from "./components/experience-with-section/experience-with-section.component";
import { ProjectsSectionComponent } from "./components/projects-section/projects-section.component";
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { ExperienceSectionComponent } from "./components/experience-section/experience-section.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    LoadingComponent,
    BackToTopComponent,
    HeroSectionComponent,
    ExperienceWithSectionComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  windowSize: WindowSize = { width: '100%', height: '100%' };
  backToTopVisibility: boolean = false;
  database: Database = { experiences: [], projects: [] };


  constructor(private loadingService: LoadingService) {
    this.onResize();
    loadingService.setVisibility(true);
  }

  ngOnInit(): void {
    this.getDatabase();

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

  updateWindowSize() {
    this.windowSize.width = `${window.innerWidth}px`;
    this.windowSize.height = `${window.innerHeight}px`;
  }

  initBackToTop() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.backToTopVisibility = scrollY > 200;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.initBackToTop();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateWindowSize();
  }

  async getDatabase(): Promise<boolean> {
    try {
      const database = await axios.get('/assets/database/db.json');

      if (!database.data) {
        throw "failed to fetch database!";
      }

      this.database = database.data as Database;

      return true;
    } catch (error) {
      console.debug(error);
      return false;
    }

  }
}
