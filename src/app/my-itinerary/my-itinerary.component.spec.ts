import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyItineraryComponent } from './my-itinerary.component';

describe('MyItineraryComponent', () => {
  let component: MyItineraryComponent;
  let fixture: ComponentFixture<MyItineraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyItineraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
