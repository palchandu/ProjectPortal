import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogDashboardComponent } from './admin-blog-dashboard.component';

describe('AdminBlogDashboardComponent', () => {
  let component: AdminBlogDashboardComponent;
  let fixture: ComponentFixture<AdminBlogDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
