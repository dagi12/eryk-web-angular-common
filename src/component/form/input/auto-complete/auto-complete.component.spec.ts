import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {AutoCompleteComponent} from './auto-complete.component';

import {ApiConfigService} from '../../../../service/api-config.service';
import {ERYK_CONFIG} from '../../../../eryk.token';
import {erykConfigStub} from '../../../../../../../testing/common-stubs';
import {FormControl} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('AutoCompleteComponent', () => {
  let component: AutoCompleteComponent;
  let fixture: ComponentFixture<AutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [AutoCompleteComponent], schemas: [NO_ERRORS_SCHEMA],
      providers: [
        ApiConfigService,
        {provide: ERYK_CONFIG, useValue: erykConfigStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteComponent);
    component = fixture.componentInstance;
    component.formControl = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
