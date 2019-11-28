import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCrudComponent } from './city-crud.component';

describe('CityCrudComponent', () => {
  let component: CityCrudComponent;
  let fixture: ComponentFixture<CityCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
