import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendKeyComponent } from './send-key.component';

describe('SendKeyComponent', () => {
  let component: SendKeyComponent;
  let fixture: ComponentFixture<SendKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
