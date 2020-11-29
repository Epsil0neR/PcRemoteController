import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ControlEditorViewComponent } from './control-editor-view.component';

describe('ControlEditorViewComponent', () => {
  let component: ControlEditorViewComponent;
  let fixture: ComponentFixture<ControlEditorViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlEditorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlEditorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
