import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import OverviewWindow from '../../core/models/OverviewWindow.model';

@Component({
  selector: 'overview-window',
  imports: [],
  templateUrl: './overview-window.component.html',
  styleUrl: './overview-window.component.scss'
})
export class OverviewWindowComponent {
  @Input() window!: OverviewWindow;
  @ViewChild('overviewWindow') overveiwWindow!: ElementRef<HTMLDivElement>;
  @ViewChild('resizer') resizer!: ElementRef<HTMLDivElement>;
  @ViewChild('resizerButton') resizerButton!: ElementRef<HTMLDivElement>;
  isDragging: boolean = false;
  dragStartX: number = 0;
  sizeAsPercent: number = 0;

  ngAfterViewInit(): void {
    this.onResize();
    this.resizer.nativeElement.addEventListener('mousedown', (e) => this.startDrag(e))
  }

  @HostListener('window:resize')
  onResize() {
    const innerWidth: number = window.innerWidth;
    if (innerWidth <= 640) {
      this.sizeAsPercent = 100;
    } else if (innerWidth > 640 && innerWidth <= 768) {
      this.sizeAsPercent = 80;
    } else if (innerWidth > 768 && innerWidth <= 1024) {
      this.sizeAsPercent = 50;
    } else if (innerWidth > 1024) {
      this.sizeAsPercent = 40;
    }
  }

  hideWindow() {
    this.window.onHide();
  }

  startDrag(e: MouseEvent) {
    this.resizerButton.nativeElement.classList.replace('bg-white', 'bg-primary');
    this.isDragging = true;
    this.dragStartX = e.pageX;
    document.addEventListener('mousemove', (e) => this.drag(e));
    document.addEventListener('mouseup', () => this.endDrag());
    document.body.style.userSelect = 'none';
  }

  endDrag() {
    this.resizerButton.nativeElement.classList.replace('bg-primary', 'bg-white');
    this.isDragging = false;
    document.removeEventListener('mousemove', (e) => this.drag(e));
    document.removeEventListener('mouseup', (e) => this.drag(e));
    document.body.style.userSelect = 'auto';
  }

  drag(e: MouseEvent) {
    if (!this.isDragging) return;

    requestAnimationFrame(() => {
      const elementSizePercent = 100 - (((e.pageX - (this.resizer.nativeElement.offsetWidth / 2)) * 100) / window.innerWidth);
      if (elementSizePercent < 90 && elementSizePercent > 30) {
        this.sizeAsPercent = elementSizePercent;
      }
    })
  }
}
