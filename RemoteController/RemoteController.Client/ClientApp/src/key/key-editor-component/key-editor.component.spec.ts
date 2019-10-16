import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyEditorComponent } from './key-editor.component';

describe('KeyEditorComponent', () => {
  let component: KeyEditorComponent;
  let fixture: ComponentFixture<KeyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
