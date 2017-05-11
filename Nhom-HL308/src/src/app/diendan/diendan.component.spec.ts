import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiendanComponent } from './diendan.component';

describe('DiendanComponent', () => {
  let component: DiendanComponent;
  let fixture: ComponentFixture<DiendanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiendanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiendanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
