import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBar2Component } from './side-bar2.component';

describe('SideBar2Component', () => {
  let component: SideBar2Component;
  let fixture: ComponentFixture<SideBar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
