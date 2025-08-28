import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostShortCardComponent } from './blog-post-short-card.component';

describe('BlogPostShortCardComponent', () => {
  let component: BlogPostShortCardComponent;
  let fixture: ComponentFixture<BlogPostShortCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostShortCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostShortCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
