import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {AutoCompleteValidatedComponent} from './auto-complete-validated.component';
import {ApiConfigService} from '../../../../service/api-config.service';
import {BaseRequestOptions, Http, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {AuthHttp} from 'angular2-jwt';
import {ERYK_CONFIG} from '../../../../eryk.token';
import {erykConfigStub} from '../../../../../../../testing/common-stubs';
import {FormControl} from '@angular/forms';

describe('AutoCompleteValidatedComponent', () => {
  let component: AutoCompleteValidatedComponent;
  let fixture: ComponentFixture<AutoCompleteValidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCompleteValidatedComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        ApiConfigService,
        BaseRequestOptions,
        MockBackend,
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: AuthHttp,
          useFactory: (mockedBackend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(mockedBackend, defaultOptions);
          },
        },
        {provide: ERYK_CONFIG, useValue: erykConfigStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteValidatedComponent);
    component = fixture.componentInstance;
    component.formControl = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
