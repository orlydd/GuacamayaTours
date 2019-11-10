import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinyDetailsComponent } from './destiny-details.component';

describe('DestinyDetailsComponent', () => {
  let component: DestinyDetailsComponent;
  let fixture: ComponentFixture<DestinyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
