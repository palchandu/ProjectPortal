import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectDashboardComponent } from './admin-project-dashboard.component';

describe('AdminProjectDashboardComponent', () => {
  let component: AdminProjectDashboardComponent;
  let fixture: ComponentFixture<AdminProjectDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
