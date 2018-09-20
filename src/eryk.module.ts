import {Injector, NgModule, Optional, SkipSelf} from '@angular/core';


import {Global} from './util/global';
import {EmptyModalComponent} from './ui/empty-modal/empty-modal.component';
import {TopNavbarComponent} from './component/topnavbar/topnavbar.component';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiConfigService} from './service/api-config.service';
import {CommonModalService} from './service/common-modal/common-modal.service';
import {CrudTableService} from './ui/crud-table/crud-table.service';
import {InterceptedHttp} from './service/InterceptedHttp';
import {ERYK_CONFIG} from './eryk.token';
import {RouterOutletComponent} from './component/router-outlet-component/router-outlet.component';
import {BaseTableComponent} from './component/base-table/base-table.component';
import {RouterModule} from '@angular/router';
import {BsDatepickerModule, CollapseModule, TypeaheadModule} from 'ngx-bootstrap';
import {DatePickerComponent} from './component/date-picker/date-picker.component';
import {ErykConfig} from './eryk.interface';
import {PostConfigService} from './service/post-config/post-config.service';
import {PostConfigResolver} from './service/post-config/post-config.resolver';
import {YesNoPipe} from './pipes/yes-no.pipe';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {TextAreaComponent} from './ui/text-area/text-area.component';
import {FormGroupComponent} from './ui/form-group/form-group.component';
import {PreviewInputComponent} from './ui/preview-input/preview-input.component';
import {AutoCompleteComponent} from './ui/auto-complete/auto-complete.component';
import {TextInputValidatedComponent} from './validation/text-input-validated/text-input-validated.component';
import {AutoCompleteValidatedComponent} from './validation/auto-complete-validated/auto-complete-validated.component';
import {TextAreaValidatedComponent} from './validation/text-area-validated/text-area-validated.component';
import {ToastrModule} from 'ngx-toastr';
import {MyToastService} from './service/my-toast.service';
import {PanelComponent} from './ui/panel/panel.component';
import {HeaderModalComponent} from './component/modal/header-modal/header-modal.component';

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
    AutoCompleteComponent,
    TextInputValidatedComponent,
    AutoCompleteValidatedComponent,
    TextAreaValidatedComponent,
    PanelComponent,
    YesNoPipe,
    HeaderModalComponent,
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
    AutoCompleteComponent,
    TextInputValidatedComponent,
    AutoCompleteValidatedComponent,
    TextAreaValidatedComponent,
    PanelComponent,
    HeaderModalComponent,
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
    TypeaheadModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ApiConfigService,
    CommonModalService,
    CrudTableService,
    PostConfigService,
    PostConfigResolver,
    MyToastService,
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
