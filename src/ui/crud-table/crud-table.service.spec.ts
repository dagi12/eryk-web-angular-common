import {inject, TestBed} from '@angular/core/testing';

import {CrudTableService} from './crud-table.service';

describe('CrudTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudTableService]
    });
  });

  it('should be created', inject([CrudTableService], (service: CrudTableService) => {
    expect(service).toBeTruthy();
  }));
});
