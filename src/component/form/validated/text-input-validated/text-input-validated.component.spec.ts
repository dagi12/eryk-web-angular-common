import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {TextInputValidatedComponent} from './text-input-validated.component';
import {FormControl} from '@angular/forms';

describe('TextInputValidatedComponent', () => {
  let component: TextInputValidatedComponent;
  let fixture: ComponentFixture<TextInputValidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextInputValidatedComponent], schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputValidatedComponent);
    component = fixture.componentInstance;
    component.formControl = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
