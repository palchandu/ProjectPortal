import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBlogsSingleComponent } from './project-blogs-single.component';

describe('ProjectBlogsSingleComponent', () => {
  let component: ProjectBlogsSingleComponent;
  let fixture: ComponentFixture<ProjectBlogsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBlogsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBlogsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
