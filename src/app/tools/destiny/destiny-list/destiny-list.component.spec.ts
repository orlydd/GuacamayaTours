import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinyListComponent } from './destiny-list.component';

describe('DestinyListComponent', () => {
  let component: DestinyListComponent;
  let fixture: ComponentFixture<DestinyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
