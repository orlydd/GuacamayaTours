import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinyCrudComponent } from './destiny-crud.component';

describe('DestinyCrudComponent', () => {
  let component: DestinyCrudComponent;
  let fixture: ComponentFixture<DestinyCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinyCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinyCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
