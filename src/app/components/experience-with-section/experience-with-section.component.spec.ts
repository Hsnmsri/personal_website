import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceWithSectionComponent } from './experience-with-section.component';

describe('ExperienceWithSectionComponent', () => {
  let component: ExperienceWithSectionComponent;
  let fixture: ComponentFixture<ExperienceWithSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceWithSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceWithSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
