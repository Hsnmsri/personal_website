import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigatorItemComponent } from './side-navigator-item.component';

describe('SideNavigatorItemComponent', () => {
  let component: SideNavigatorItemComponent;
  let fixture: ComponentFixture<SideNavigatorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavigatorItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavigatorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
