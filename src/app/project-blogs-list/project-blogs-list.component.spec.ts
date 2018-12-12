import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBlogsListComponent } from './project-blogs-list.component';

describe('ProjectBlogsListComponent', () => {
  let component: ProjectBlogsListComponent;
  let fixture: ComponentFixture<ProjectBlogsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBlogsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBlogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
