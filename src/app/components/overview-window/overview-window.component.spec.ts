import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewWindowComponent } from './overview-window.component';

describe('OverviewWindowComponent', () => {
  let component: OverviewWindowComponent;
  let fixture: ComponentFixture<OverviewWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
