import {inject, TestBed} from '@angular/core/testing';

import {MyTitleService} from './my-title.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FLOTA_CONFIG} from '../../../flota-web-angular-common/src/flota-config.token';
import {flotaConfigStub} from '../../../../testing/common-stubs';

describe('MyTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [MyTitleService, {
        provide: FLOTA_CONFIG, useValue: flotaConfigStub
      }]
    });
  });

  it('should be created', inject([MyTitleService], (service: MyTitleService) => {
    expect(service).toBeTruthy();
  }));
});
