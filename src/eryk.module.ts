import {Injector, NgModule, Optional, SkipSelf} from '@angular/core';


import {Global} from './global/global';
import {EmptyModalComponent} from './ui/empty-modal/empty-modal.component';
import {TopNavbarComponent} from './topnavbar/topnavbar.component';
import {TextInputComponent} from './ui/text-input/text-input.component';
import {ButtonComponent} from './ui/button/button.component';
import {LabelWrapperComponent} from './ui/label-wrapper/label-wrapper.component';
import {HelpDialogComponent} from './ui/help-dialog/help-dialog.component';
import {MySelectComponent} from './ui/my-select/my-select.component';
import {IboxComponent} from './ui/ibox/ibox.component';
import {ModalHeaderComponent} from './ui/modal-header/modal-header.component';
import {ErrorBoxComponent} from './ui/error-box/error-box.component';
import {ShakingErrorComponent} from './ui/shaking-error/shaking-error.component';
import {CrudTableComponent} from './ui/crud-table/crud-table.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ApiConfigService} from './api-config/api-config.service';
import {CommonModalService} from './common-modal/common-modal.service';
import {CrudTableService} from './ui/crud-table/crud-table.service';
import {InterceptedHttp} from './config/InterceptedHttp';
import {ERYK_CONFIG} from './eryk.token';
import {RouterOutletComponent} from './router-outlet-component/router-outlet.component';
import {BaseTableComponent} from './base-table/base-table.component';
import {RouterModule} from '@angular/router';
import {BsDatepickerModule, CollapseModule} from 'ngx-bootstrap';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {ErykConfig} from './eryk.interface';
import {PostConfigService} from './post-config/post-config.service';
import {PostConfigResolver} from './post-config/post-config.resolver';
import {YesNoPipe} from './pipes/yes-no.pipe';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {TextAreaComponent} from './ui/text-area/text-area.component';
import {FormGroupComponent} from './ui/form-group/form-group.component';
import {PreviewInputComponent} from './ui/preview-input/preview-input.component';

@NgModule({
  declarations: [
    TopNavbarComponent,
    TextInputComponent,
    ButtonComponent,
    LabelWrapperComponent,
    HelpDialogComponent,
    MySelectComponent,
    IboxComponent,
    ModalHeaderComponent,
    ErrorBoxComponent,
    EmptyModalComponent,
    ShakingErrorComponent,
    CrudTableComponent,
    RouterOutletComponent,
    BaseTableComponent,
    DatePickerComponent,
    TextAreaComponent,
    FormGroupComponent,
    PreviewInputComponent,
    YesNoPipe
  ],
  exports: [
    TopNavbarComponent,
    TextInputComponent,
    ButtonComponent,
    LabelWrapperComponent,
    HelpDialogComponent,
    MySelectComponent,
    IboxComponent,
    ModalHeaderComponent,
    ErrorBoxComponent,
    EmptyModalComponent,
    ShakingErrorComponent,
    CrudTableComponent,
    RouterOutletComponent,
    BaseTableComponent,
    DatePickerComponent,
    TextAreaComponent,
    FormGroupComponent,
    PreviewInputComponent,
    YesNoPipe
  ],
  imports: [
    BsDatepickerModule,
    BrowserModule,
    FormsModule,
    CollapseModule,
    SharedModule,
    DataTableModule,
    RouterModule,
  ],
  providers: [
    ApiConfigService,
    CommonModalService,
    CrudTableService,
    PostConfigService,
    PostConfigResolver,
    InterceptedHttp,
  ],
  entryComponents: [
    EmptyModalComponent
  ]
})
export class ErykModule {


  public constructor(@Optional() @SkipSelf() parentModule: ErykModule, injector: Injector) {
    if (parentModule) {
      throw new Error('ErykModule has already been imported.');
    } else {
      Global.injector = injector;
    }
  }

  public static forRoot(config: ErykConfig) {
    return {
      ngModule: ErykModule,
      providers: [
        {provide: ERYK_CONFIG, useValue: config}
      ]
    };
  }


}
