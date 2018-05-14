import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MySelectMockComponent} from '../../ui/my-select/my-select.component.mock';
import {IboxMockComponent} from '../../ui/ibox/ibox.component.mock';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MySelectMockComponent,
    IboxMockComponent,
  ]
})
export class MockModule {
}
