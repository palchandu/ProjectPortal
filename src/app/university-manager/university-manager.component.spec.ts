import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityManagerComponent } from './university-manager.component';

describe('UniversityManagerComponent', () => {
  let component: UniversityManagerComponent;
  let fixture: ComponentFixture<UniversityManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
