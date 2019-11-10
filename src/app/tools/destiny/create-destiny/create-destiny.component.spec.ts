import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDestinyComponent } from './create-destiny.component';

describe('CreateDestinyComponent', () => {
  let component: CreateDestinyComponent;
  let fixture: ComponentFixture<CreateDestinyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDestinyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDestinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
