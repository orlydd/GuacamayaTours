import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinylistComponent } from './destinylist.component';

describe('DestinylistComponent', () => {
  let component: DestinylistComponent;
  let fixture: ComponentFixture<DestinylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
