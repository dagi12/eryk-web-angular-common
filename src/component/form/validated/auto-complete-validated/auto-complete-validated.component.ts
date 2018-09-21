import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AuthHttp} from 'angular2-jwt';
import {ApiConfigService} from '../../../../service/api-config.service';
import {EmitterPass, passEmitter} from '../../../../util/utils';
import {AutoCompleteComponent} from '../../input/auto-complete/auto-complete.component';

@Component({
  selector: 'app-auto-complete-validated',
  templateUrl: './auto-complete-validated.component.html',
  styles: []
})
export class AutoCompleteValidatedComponent extends AutoCompleteComponent {

  @Input() control: FormControl;
  @Input() submitted: boolean;
  @Output() onSelect = new EventEmitter();
  locOnSelect: EmitterPass;

  constructor(authHttp: AuthHttp, apiConfigService: ApiConfigService, injector: Injector) {
    super(authHttp, apiConfigService, injector);
    this.locOnSelect = passEmitter(this.onSelect);
  }

}
