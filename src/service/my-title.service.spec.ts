import {inject, TestBed} from '@angular/core/testing';

import {MyTitleService} from './my-title.service';

describe('MyTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTitleService]
    });
  });

  it('should be created', inject([MyTitleService], (service: MyTitleService) => {
    expect(service).toBeTruthy();
  }));
});
