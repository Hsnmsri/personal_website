import { Component } from '@angular/core';
import { BlogPostShortCardComponent } from '../blog-post-short-card/blog-post-short-card.component';
import { DynamicCarouselComponent } from "../dynamic-carousel/dynamic-carousel.component";

@Component({
  selector: 'blog-section',
  imports: [BlogPostShortCardComponent, DynamicCarouselComponent],
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.scss'
})
export class BlogSectionComponent {

}
