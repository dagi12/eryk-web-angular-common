import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {ApiConfigService} from '../../../../service/api-config.service';
import {EmitterPass, passEmitter} from '../../../../util/utils';
import {AutoCompleteComponent} from '../../input/auto-complete/auto-complete.component';
import {MakeProvider} from '../../input/abstract-value-accessor.component';
import {IValidated} from '../ivalidated';
import {applyMixins} from 'rxjs/util/applyMixins';

@Component({
  selector: 'app-auto-complete-validated',
  templateUrl: './auto-complete-validated.component.html',
  styles: [],
  providers: [MakeProvider(AutoCompleteValidatedComponent)]
})
export class AutoCompleteValidatedComponent extends AutoCompleteComponent implements IValidated {

  @Input() submitted: boolean;
  @Output() onSelect = new EventEmitter();
  locOnSelect: EmitterPass;

  constructor(authHttp: AuthHttp, apiConfigService: ApiConfigService, injector: Injector) {
    super(authHttp, apiConfigService, injector);
    this.locOnSelect = passEmitter(this.onSelect);
  }

}

applyMixins(AutoCompleteValidatedComponent, [IValidated]);
