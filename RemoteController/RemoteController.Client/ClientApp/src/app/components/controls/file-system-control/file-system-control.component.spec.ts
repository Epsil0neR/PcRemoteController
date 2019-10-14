import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSystemControlComponent } from './file-system-control.component';

describe('FileSystemControlComponent', () => {
  let component: FileSystemControlComponent;
  let fixture: ComponentFixture<FileSystemControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSystemControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSystemControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
