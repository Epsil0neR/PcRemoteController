import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateControlComponent } from './create-control.component';

describe('CreateControlComponent', () => {
  let component: CreateControlComponent;
  let fixture: ComponentFixture<CreateControlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
