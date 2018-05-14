/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {ApiConfigurationService} from './api-configuration.service';

describe('ApiConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiConfigurationService]
    });
  });

  it('should ...', inject([ApiConfigurationService], (service: ApiConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
