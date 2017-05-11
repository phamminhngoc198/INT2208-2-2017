import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DethitestComponent } from './dethitest.component';

describe('DethitestComponent', () => {
  let component: DethitestComponent;
  let fixture: ComponentFixture<DethitestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DethitestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DethitestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
