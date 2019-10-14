import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandControlComponent } from './command-control.component';

describe('CommandControlComponent', () => {
  let component: CommandControlComponent;
  let fixture: ComponentFixture<CommandControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
