import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlViewComponent } from './control-view.component';

describe('ControlViewComponent', () => {
  let component: ControlViewComponent;
  let fixture: ComponentFixture<ControlViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
