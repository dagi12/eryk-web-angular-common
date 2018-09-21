import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AuthHttp} from 'angular2-jwt';
import {ApiConfigService} from '../../../../service/api-config.service';
import {isError} from '../common-validators';
import {EmitterPass, passEmitter} from '../../../../util/utils';
import {AutoCompleteComponent} from '../../input/auto-complete/auto-complete.component';

@Component({
  selector: 'app-auto-complete-validated',
  templateUrl: './auto-complete-validated.component.html',
  styles: []
})
export class AutoCompleteValidatedComponent extends AutoCompleteComponent implements OnInit {

  @Input() control: FormControl;
  @Input() submitted: boolean;
  @Output() onSelect = new EventEmitter();
  locOnSelect: EmitterPass;
  locIsError = () => isError(this.control, this.submitted);

  constructor(authHttp: AuthHttp, apiConfigService: ApiConfigService) {
    super(authHttp, apiConfigService);
    this.locOnSelect = passEmitter(this.onSelect);
  }

  ngOnInit() {
  }

}
