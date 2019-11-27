import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsSeeMoreComponent } from './hotels-see-more.component';

describe('HotelsSeeMoreComponent', () => {
  let component: HotelsSeeMoreComponent;
  let fixture: ComponentFixture<HotelsSeeMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsSeeMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
