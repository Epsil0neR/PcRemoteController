import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSelectorComponent } from './icon-selector.component';

describe('IconSelectorComponent', () => {
  let component: IconSelectorComponent;
  let fixture: ComponentFixture<IconSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
