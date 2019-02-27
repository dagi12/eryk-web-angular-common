import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {MyTableInternalComponent} from './my-table-internal.component';
import {DatexPipe} from '../../../pipes/datex.pipe';
import {YesNoPipe} from '../../../pipes/yes-no.pipe';
import {MyMobileDetectService} from '../../../service/my-mobile-detect.service';
import {AttachmentService} from '../../../../../flota-web-angular-common/src/component/attachment/attachment.service';
import {apiConfigServiceStub, attachmentServiceStub} from '../../../../../../testing/common-stubs';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ApiConfigService} from '../../../service/api-config.service';
import {DataTableModule, MultiSelectModule, SharedModule, SliderModule} from 'primeng/primeng';

describe('MyTableInternalComponent', () => {
  let component: MyTableInternalComponent;
  let fixture: ComponentFixture<MyTableInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DataTableModule,
        MultiSelectModule, SharedModule, SliderModule,
        NgxSpinnerModule
      ],
      declarations: [
        MyTableInternalComponent,
        DatexPipe,
        YesNoPipe
      ], schemas: [NO_ERRORS_SCHEMA],
      providers: [
        MyMobileDetectService,
        {provide: AttachmentService, useValue: attachmentServiceStub},
        {provide: ApiConfigService, useValue: apiConfigServiceStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableInternalComponent);
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
