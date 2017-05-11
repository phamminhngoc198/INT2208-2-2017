import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LambaiComponent } from './lambai.component';

describe('LambaiComponent', () => {
  let component: LambaiComponent;
  let fixture: ComponentFixture<LambaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LambaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LambaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
