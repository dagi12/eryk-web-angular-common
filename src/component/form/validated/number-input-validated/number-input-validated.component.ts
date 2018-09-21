import {Component, Input} from '@angular/core';
import {MakeProvider} from '../../input/abstract-value-accessor.component';
import {NumberInputComponent} from '../../input/number-input/number-input.component';
import {isError} from '../common-validators';

@Component({
  selector: 'app-number-input-validated',
  templateUrl: './number-input-validated.component.html',
  styles: [],
  providers: [MakeProvider(NumberInputValidatedComponent)]
})
export class NumberInputValidatedComponent extends NumberInputComponent {

  @Input() required: boolean;
  @Input() submitted: boolean;

  numberIsError = (errorName) => isError(this.formControl, this.submitted, !this.formControl.hasError(errorName));

}
