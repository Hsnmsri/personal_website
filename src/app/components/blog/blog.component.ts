import { Component } from '@angular/core';
import { BlogNavComponent } from "../blog-nav/blog-nav.component";

@Component({
  selector: 'app-blog',
  imports: [BlogNavComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
