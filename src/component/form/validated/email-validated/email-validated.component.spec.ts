import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmailValidatedComponent} from './email-validated.component';

describe('EmailValidatedComponent', () => {
  let component: EmailValidatedComponent;
  let fixture: ComponentFixture<EmailValidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailValidatedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
