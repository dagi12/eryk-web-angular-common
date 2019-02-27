import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {TextAreaValidatedComponent} from './text-area-validated.component';
import {FormControl} from '@angular/forms';

describe('TextAreaValidatedComponent', () => {
  let component: TextAreaValidatedComponent;
  let fixture: ComponentFixture<TextAreaValidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextAreaValidatedComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaValidatedComponent);
    component = fixture.componentInstance;
    component.formControl = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
