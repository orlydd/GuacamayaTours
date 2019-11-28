import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCrudListComponent } from './hotel-crud-list.component';

describe('HotelCrudListComponent', () => {
  let component: HotelCrudListComponent;
  let fixture: ComponentFixture<HotelCrudListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelCrudListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCrudListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
