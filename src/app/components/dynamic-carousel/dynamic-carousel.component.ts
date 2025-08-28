import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'dynamic-carousel',
  standalone: true,
  templateUrl: './dynamic-carousel.component.html',
  styleUrls: ['./dynamic-carousel.component.scss']
})
export class DynamicCarouselComponent implements AfterViewInit {
  @Input() hasSideFade: boolean = false;
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  // برای inertia
  velocity = 0;
  lastX = 0;
  momentumId: number | null = null;

  ngAfterViewInit() {
    const slider = this.carousel.nativeElement;

    // Mouse events
    slider.addEventListener('mousedown', (e) => this.dragStart(e));
    document.addEventListener('mouseup', () => this.dragEnd());
    document.addEventListener('mousemove', (e) => this.dragMove(e));

    // Touch events
    slider.addEventListener('touchstart', (e) => this.dragStart(e));
    document.addEventListener('touchend', () => this.dragEnd());
    document.addEventListener('touchmove', (e) => this.dragMove(e), { passive: false });
  }

  dragStart(e: MouseEvent | TouchEvent) {
    this.isDragging = true;

    let pageX: number;
    if (e instanceof MouseEvent) {
      pageX = e.pageX;
    } else {
      pageX = e.touches[0].pageX;
    }

    this.startX = pageX;
    this.scrollLeft = this.carousel.nativeElement.scrollLeft;
    this.lastX = pageX;

    // لغو انیمیشن قبلی
    if (this.momentumId) {
      cancelAnimationFrame(this.momentumId);
      this.momentumId = null;
    }
  }

  dragEnd() {
    this.isDragging = false;

    const momentum = () => {
      if (Math.abs(this.velocity) > 0.5) {
        this.carousel.nativeElement.scrollLeft -= this.velocity;
        this.velocity *= 0.95; // ضریب کاهش سرعت
        this.momentumId = requestAnimationFrame(momentum);
      }
    };
    momentum();
  }

  dragMove(e: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;

    let pageX: number;
    if (e instanceof MouseEvent) {
      pageX = e.pageX;
    } else {
      pageX = e.touches[0].pageX;
      e.preventDefault(); // جلوگیری از اسکرول عمودی پیش‌فرض در موبایل
    }

    requestAnimationFrame(() => {
      const walk = pageX - this.startX;
      this.carousel.nativeElement.scrollLeft = this.scrollLeft - walk;

      // محاسبه سرعت برای inertia
      this.velocity = pageX - this.lastX;
      this.lastX = pageX;
    });
  }
}
