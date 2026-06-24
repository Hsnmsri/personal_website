import { Component } from '@angular/core';
import { SideNavigatorItemComponent } from '../side-navigator-item/side-navigator-item.component';
import { RouterLink } from '@angular/router';

interface ItemModel {
  title: string;
  linkTag: string;
}

@Component({
  selector: 'app-side-navigator',
  imports: [SideNavigatorItemComponent],
  templateUrl: './side-navigator.component.html',
  styleUrl: './side-navigator.component.scss'
})
export class SideNavigatorComponent {
  linkItems: ItemModel[];

  constructor() {
    this.linkItems = [
      {
        title: 'Home',
        linkTag: '#home'
      },
      {
        title: 'Projects',
        linkTag: '#projects'
      },
      {
        title: 'Experience',
        linkTag: '#experience'
      },
      {
        title: 'Contact',
        linkTag: '#contact-us'
      },
      {
        title: 'About',
        linkTag: '#contact-us'
      }
    ]
  }
}
