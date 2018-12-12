import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeManagerComponent } from './college-manager.component';

describe('CollegeManagerComponent', () => {
  let component: CollegeManagerComponent;
  let fixture: ComponentFixture<CollegeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
