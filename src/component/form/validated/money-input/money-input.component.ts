import {Component} from '@angular/core';
import {MakeProvider} from '../../input/abstract-value-accessor.component';
import {NumberInputValidatedComponent} from '../number-input-validated/number-input-validated.component';
import {DEC_MAX_VALUE} from '../../../../util/const';

@Component({
  selector: 'app-money-input',
  templateUrl: './money-input.component.html',
  styles: [],
  providers: [MakeProvider(MoneyInputComponent)]
})
export class MoneyInputComponent extends NumberInputValidatedComponent {

  max = DEC_MAX_VALUE;

}
