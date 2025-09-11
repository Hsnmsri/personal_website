import { Component } from '@angular/core';
import { OverviewWindowComponent } from "../overview-window/overview-window.component";
import OverviewWindow from '../../core/models/OverviewWindow.model';
import { ContactUsFormComponent } from "../contact-us-form/contact-us-form.component";

@Component({
  selector: 'contact-us-section',
  imports: [OverviewWindowComponent, ContactUsFormComponent],
  templateUrl: './contact-us-section.component.html',
  styleUrl: './contact-us-section.component.scss'
})
export class ContactUsSectionComponent {
  contactUsFormWindow: OverviewWindow = {
    title: "Contact Us",
    resize: false,
    visibility: false,
    onHide: () => {
      this.contactUsFormWindow.visibility = false;
    }
  }
}
