import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AnimatedLogoComponent } from "../animated-logo/animated-logo.component";
import { LoadingService } from '../../core/services/loading/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading',
  imports: [AnimatedLogoComponent],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  visibility: { status: boolean; sub: Subscription | null } = {
    status: false,
    sub: null
  };

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.visibility.sub = this.loadingService.getVisibility().subscribe((status: boolean) => {
      this.visibility.status = status;
    })
  }

  ngOnDestroy(): void {
    this.visibility.sub?.unsubscribe();
  }
}
