import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinyFormComponent } from './destiny-form.component';

describe('DestinyFormComponent', () => {
  let component: DestinyFormComponent;
  let fixture: ComponentFixture<DestinyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
