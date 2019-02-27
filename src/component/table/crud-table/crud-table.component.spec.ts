import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {CrudTableComponent} from './crud-table.component';
import {Modal} from 'ngx-modialog';
import {crudTableServiceStub, modalStub} from '../../../../../../testing/common-stubs';
import {CrudTableService} from './crud-table.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('CrudTableComponent', () => {
  let component: CrudTableComponent;
  let fixture: ComponentFixture<CrudTableComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        CrudTableComponent
      ], schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: Modal, useValue: modalStub},
        {provide: CrudTableService, useValue: crudTableServiceStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTableComponent);
    component = fixture.componentInstance;
    component.columns = [
      {field: 'dupa', header: 'dupa'}
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
