import { Component, input, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-side-navigator-item',
  imports: [RouterLink],
  templateUrl: './side-navigator-item.component.html',
  styleUrl: './side-navigator-item.component.scss'
})
export class SideNavigatorItemComponent {
  @Input() title?: string;
  @Input() link?: string;
}
