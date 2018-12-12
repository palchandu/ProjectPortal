import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagerComponent } from './state-manager.component';

describe('StateManagerComponent', () => {
  let component: StateManagerComponent;
  let fixture: ComponentFixture<StateManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
