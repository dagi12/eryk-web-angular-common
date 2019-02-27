import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {ErrorBoxesComponent} from './error-boxes.component';
import {NgForInDirective} from '../../../directives/ng-for-in.directive';
import {FormControl} from '@angular/forms';

describe('ErrorBoxesComponent', () => {
  let component: ErrorBoxesComponent;
  let fixture: ComponentFixture<ErrorBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorBoxesComponent, NgForInDirective], schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorBoxesComponent);
    component = fixture.componentInstance;
    component.config = {
      'dupa': 'dupa'
    };
    component.control = new FormControl();
    component.submitted = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
