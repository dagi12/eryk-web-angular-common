import {Injector, NgModule, Optional, SkipSelf} from '@angular/core';


import {Global} from './util/global';
import {SpinnerComponent} from './component/table/spinner/spinner.component';
import {TopNavbarComponent} from './component/topnavbar/topnavbar.component';
import {TextInputComponent} from './component/form/input/text-input/text-input.component';
import {ButtonComponent} from './component/form/button/button.component';
import {LabelWrapperComponent} from './component/wrapper/label-wrapper/label-wrapper.component';
import {HelpDialogComponent} from './component/modal/help-dialog/help-dialog.component';
import {MySelectComponent} from './component/form/input/my-select/my-select.component';
import {IboxComponent} from './component/wrapper/ibox/ibox.component';
import {ModalHeaderComponent} from './component/modal/modal-header/modal-header.component';
import {ErrorBoxComponent} from './component/form/error-box/error-box.component';
import {EmptyModalComponent} from './component/modal/empty-modal/empty-modal.component';
import {ShakingErrorComponent} from './component/form/shaking-error/shaking-error.component';
import {CrudTableComponent} from './component/table/crud-table/crud-table.component';
import {RouterOutletComponent} from './component/router-outlet-component/router-outlet.component';
import {BaseTableComponent} from './component/table/base-table/base-table.component';
import {DatePickerComponent} from './component/form/input/date-picker/date-picker.component';
import {TextAreaComponent} from './component/form/input/text-area/text-area.component';
import {FormGroupComponent} from './component/form/form-group/form-group.component';
import {PreviewInputComponent} from './component/form/input/preview-input/preview-input.component';
import {AutoCompleteComponent} from './component/form/input/auto-complete/auto-complete.component';
import {TextInputValidatedComponent} from './component/form/validated/text-input-validated/text-input-validated.component';
import {AutoCompleteValidatedComponent} from './component/form/validated/auto-complete-validated/auto-complete-validated.component';
import {TextAreaValidatedComponent} from './component/form/validated/text-area-validated/text-area-validated.component';
import {PanelComponent} from './component/wrapper/panel/panel.component';
import {YesNoPipe} from './pipes/yes-no.pipe';
import {HeaderModalComponent} from './component/modal/header-modal/header-modal.component';
import {CheckboxComponent} from './component/form/input/checkbox/checkbox.component';
import {NumberInputValidatedComponent} from './component/form/validated/number-input-validated/number-input-validated.component';
import {BsLocaleService, CollapseModule, DatepickerModule, TypeaheadModule} from 'ngx-bootstrap';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import {UiSwitchModule} from 'ngx-ui-switch';
import {ApiConfigService} from './service/api-config.service';
import {CommonModalService} from './service/common-modal/common-modal.service';
import {CrudTableService} from './component/table/crud-table/crud-table.service';
import {PostConfigService} from './service/post-config/post-config.service';
import {PostConfigResolver} from './service/post-config/post-config.resolver';
import {MyToastService} from './service/my-toast.service';
import {InterceptedHttp} from './service/InterceptedHttp';
import {ErykConfig} from './eryk.interface';
import {ERYK_CONFIG} from './eryk.token';
import {NumberInputComponent} from './component/form/input/number-input/number-input.component';
import {MoneyInputComponent} from './component/form/validated/money-input/money-input.component';
import {defineLocale} from 'ngx-bootstrap/chronos';
import {plLocale} from 'ngx-bootstrap/locale';
import {ErrorBoxesComponent} from './component/form/error-boxes/error-boxes.component';
import {NgForInDirective} from './directives/ng-for-in.directive';
import {ExcelBtnComponent} from './component/table/excel-btn/excel-btn.component';
import {MyMobileDetectService} from './service/my-mobile-detect.service';

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
    SpinnerComponent,
    CheckboxComponent,
    NumberInputValidatedComponent,
    NumberInputComponent,
    MoneyInputComponent,
    ErrorBoxesComponent,
    NgForInDirective,
    ExcelBtnComponent,
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
    SpinnerComponent,
    CheckboxComponent,
    YesNoPipe,
    NumberInputValidatedComponent,
    NumberInputComponent,
    MoneyInputComponent,
    ErrorBoxesComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    DatepickerModule,
    BrowserModule,
    FormsModule,
    CollapseModule,
    SharedModule,
    DataTableModule,
    RouterModule,
    TypeaheadModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    UiSwitchModule
  ],
  providers: [
    ApiConfigService,
    CommonModalService,
    CrudTableService,
    PostConfigService,
    PostConfigResolver,
    MyToastService,
    MyMobileDetectService,
    InterceptedHttp,
  ],
  entryComponents: [
    EmptyModalComponent
  ]
})
export class ErykModule {

  public constructor(@Optional() @SkipSelf() parentModule: ErykModule, injector: Injector, localeService: BsLocaleService) {
    if (parentModule) {
      throw new Error('ErykModule has already been imported.');
    } else {
      Global.injector = injector;
    }
    defineLocale('pl', plLocale);
    localeService.use('pl');
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
