import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCrudComponent } from './state-crud.component';

describe('StateCrudComponent', () => {
  let component: StateCrudComponent;
  let fixture: ComponentFixture<StateCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
