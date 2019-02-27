import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {EmailValidatedComponent} from './email-validated.component';
import {FormControl} from '@angular/forms';

describe('EmailValidatedComponent', () => {
  let component: EmailValidatedComponent;
  let fixture: ComponentFixture<EmailValidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailValidatedComponent], schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailValidatedComponent);
    component = fixture.componentInstance;
    component.formControl = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
