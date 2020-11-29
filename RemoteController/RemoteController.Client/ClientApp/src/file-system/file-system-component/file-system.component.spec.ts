import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FileSystemComponent } from './file-system.component';

describe('FileSystemControlComponent', () => {
  let component: FileSystemComponent;
  let fixture: ComponentFixture<FileSystemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
