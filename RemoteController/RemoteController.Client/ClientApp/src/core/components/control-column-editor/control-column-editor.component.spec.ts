import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ControlColumnEditorComponent } from './control-column-editor.component';

describe('ControlColumnEditorComponent', () => {
  let component: ControlColumnEditorComponent;
  let fixture: ComponentFixture<ControlColumnEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlColumnEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlColumnEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
