/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {ApiConfigService} from './api-config.service';

describe('ApiConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiConfigService]
    });
  });

  it('should ...', inject([ApiConfigService], (service: ApiConfigService) => {
    expect(service).toBeTruthy();
  }));
});
