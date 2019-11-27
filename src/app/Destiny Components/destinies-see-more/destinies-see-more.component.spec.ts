import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestiniesSeeMoreComponent } from './destinies-see-more.component';

describe('DestiniesSeeMoreComponent', () => {
  let component: DestiniesSeeMoreComponent;
  let fixture: ComponentFixture<DestiniesSeeMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestiniesSeeMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestiniesSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
