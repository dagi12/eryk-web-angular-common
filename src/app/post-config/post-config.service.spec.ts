import {inject, TestBed} from '@angular/core/testing';

import {PostConfigService} from './post-config.service';

describe('PostConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostConfigService]
    });
  });

  it('should be created', inject([PostConfigService], (service: PostConfigService) => {
    expect(service).toBeTruthy();
  }));
});
