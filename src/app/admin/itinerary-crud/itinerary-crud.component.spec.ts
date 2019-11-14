import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryCrudComponent } from './itinerary-crud.component';

describe('ItineraryCrudComponent', () => {
  let component: ItineraryCrudComponent;
  let fixture: ComponentFixture<ItineraryCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraryCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
