import {inject, TestBed} from '@angular/core/testing';

import {CrudTableService} from './crud-table.service';
import {crudTableServiceStub} from '../../../../../../testing/common-stubs';

describe('CrudTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CrudTableService,
        {provide: CrudTableService, useValue: crudTableServiceStub}
      ]
    });
  });

  it('should be created', inject([CrudTableService], (service: CrudTableService) => {
    expect(service).toBeTruthy();
  }));
});
