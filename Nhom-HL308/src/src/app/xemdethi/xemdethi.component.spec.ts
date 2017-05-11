import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemdethiComponent } from './xemdethi.component';

describe('XemdethiComponent', () => {
  let component: XemdethiComponent;
  let fixture: ComponentFixture<XemdethiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemdethiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemdethiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
