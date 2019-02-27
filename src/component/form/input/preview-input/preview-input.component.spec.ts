import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {PreviewInputComponent} from './preview-input.component';

describe('PreviewInputComponent', () => {
  let component: PreviewInputComponent;
  let fixture: ComponentFixture<PreviewInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewInputComponent], schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
