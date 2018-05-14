import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopNavbarComponent} from './topnavbar/topnavbar.component';
import {ApiConfigService} from './api-config/api-config.service';
import {TextInputComponent} from './ui/text-input/text-input.component';
import {ButtonComponent} from './ui/button/button.component';
import {LabelWrapperComponent} from './ui/label-wrapper/label-wrapper.component';
import {HelpDialogComponent} from './ui/help-dialog/help-dialog.component';
import {MySelectComponent} from './ui/my-select/my-select.component';
import {IboxComponent} from './ui/ibox/ibox.component';
import {ModalHeaderComponent} from './ui/modal-header/modal-header.component';
import {CommonModalService} from './common-modal/common-modal.service';
import {ErrorBoxComponent} from './ui/error-box/error-box.component';
import {EmptyModalComponent} from './ui/empty-modal/empty-modal.component';
import {ShakingErrorComponent} from './ui/shaking-error/shaking-error.component';
import {CrudTableComponent} from './ui/crud-table/crud-table.component';
import {CrudTableService} from './ui/crud-table/crud-table.service';
import {InterceptedHttp} from './config/InterceptedHttp';
import {Global} from './global/global';
import {FormsModule} from '@angular/forms';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {DataTableModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
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
    CrudTableComponent
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    DataTableModule,
  ],
  providers: [
    ApiConfigService,
    CommonModalService,
    CrudTableService,
    InterceptedHttp
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EmptyModalComponent
  ]
})
export class ErykModule {

  constructor(injector: Injector) {
    Global.injector = injector;
  }

}
