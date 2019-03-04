import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {DatePickerComponent} from './date-picker.component';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {MyMobileDetectService} from '../../../../service/my-mobile-detect.service';
import {FormControl} from '@angular/forms';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BsDatepickerModule.forRoot()],
      declarations: [DatePickerComponent], schemas: [NO_ERRORS_SCHEMA],
      providers: [MyMobileDetectService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    component.formControl = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
