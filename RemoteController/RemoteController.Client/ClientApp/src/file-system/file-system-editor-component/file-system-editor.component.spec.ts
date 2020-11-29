import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FileSystemEditorComponent } from './file-system-editor.component';

describe('FileSystemEditorComponent', () => {
  let component: FileSystemEditorComponent;
  let fixture: ComponentFixture<FileSystemEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSystemEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSystemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
