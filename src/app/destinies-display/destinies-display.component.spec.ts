import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestiniesDisplayComponent } from './destinies-display.component';

describe('DestiniesDisplayComponent', () => {
  let component: DestiniesDisplayComponent;
  let fixture: ComponentFixture<DestiniesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestiniesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestiniesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
