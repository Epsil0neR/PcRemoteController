import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VolumeEditorComponent } from './volume-editor.component';

describe('VolumeEditorComponent', () => {
  let component: VolumeEditorComponent;
  let fixture: ComponentFixture<VolumeEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
