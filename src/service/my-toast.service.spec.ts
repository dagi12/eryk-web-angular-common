import {inject, TestBed} from '@angular/core/testing';

import {MyToastService} from './my-toast.service';

describe('MyToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyToastService]
    });
  });

  it('should be created', inject([MyToastService], (service: MyToastService) => {
    expect(service).toBeTruthy();
  }));
});
