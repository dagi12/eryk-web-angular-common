import {Component, Input, OnInit} from '@angular/core';
import {AutoCompleteComponent} from '../../ui/auto-complete/auto-complete.component';
import {FormControl} from '@angular/forms';
import {AuthHttp} from 'angular2-jwt';
import {ApiConfigService} from '../../api-config/api-config.service';
import {isError} from '../common-validators';

@Component({
  selector: 'app-auto-complete-validated',
  templateUrl: './auto-complete-validated.component.html',
  styles: []
})
export class AutoCompleteValidatedComponent extends AutoCompleteComponent implements OnInit {

  @Input() control: FormControl;
  @Input() submitted: boolean;
  locIsError = () => isError(this.control, this.submitted);

  constructor(authHttp: AuthHttp, apiConfigService: ApiConfigService) {
    super(authHttp, apiConfigService);
  }

  ngOnInit() {
  }

}
