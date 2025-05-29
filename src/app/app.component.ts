import { Component, HostListener } from '@angular/core';
import WindowSize from '../core/models/WindowSize.model';
import { NavbarComponent } from "./navbar/navbar.component";
import axios from 'axios';
import Database from '../core/models/Database.model';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMobile: boolean = false;
  descriptionFullVisibility: boolean = false;
  windowSize: WindowSize = { width: '100%', height: '100%' };
  backToTopVisibility: boolean = false;
  database: Database = { experiences: [], projects: [] };
  nowDate: Date = new Date();

  constructor() {
    this.onResize();
    this.initSize();
  }

  ngOnInit(): void {
    this.getDatabase();
  }

  updateWindowSize() {
    this.windowSize.width = `${window.innerWidth}px`;
    this.windowSize.height = `${window.innerHeight}px`;
  }

  initSize() {
    this.isMobile = window.innerWidth < 768;
    this.descriptionFullVisibility = !this.isMobile;
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
    this.initSize();
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
