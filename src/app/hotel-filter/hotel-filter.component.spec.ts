import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFilterComponent } from './hotel-filter.component';

describe('HotelFilterComponent', () => {
  let component: HotelFilterComponent;
  let fixture: ComponentFixture<HotelFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
