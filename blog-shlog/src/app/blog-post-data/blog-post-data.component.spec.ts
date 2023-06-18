import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostDataComponent } from './blog-post-data.component';

describe('BlogPostDataComponent', () => {
  let component: BlogPostDataComponent;
  let fixture: ComponentFixture<BlogPostDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostDataComponent]
    });
    fixture = TestBed.createComponent(BlogPostDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
