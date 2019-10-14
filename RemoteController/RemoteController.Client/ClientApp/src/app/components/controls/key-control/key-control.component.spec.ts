import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyControlComponent } from './key-control.component';

describe('KeyControlComponent', () => {
  let component: KeyControlComponent;
  let fixture: ComponentFixture<KeyControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
