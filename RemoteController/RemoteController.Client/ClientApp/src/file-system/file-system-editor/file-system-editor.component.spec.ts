import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSystemEditorComponent } from './file-system-editor.component';

describe('FileSystemEditorComponent', () => {
  let component: FileSystemEditorComponent;
  let fixture: ComponentFixture<FileSystemEditorComponent>;

  beforeEach(async(() => {
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
