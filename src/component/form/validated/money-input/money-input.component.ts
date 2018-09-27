import {Component} from '@angular/core';
import {MakeProvider} from '../../input/abstract-value-accessor.component';
import {NumberInputValidatedComponent} from '../number-input-validated/number-input-validated.component';
import {DEC_MAX_VALUE} from '../../../../util/const';
import {applyMixins} from 'rxjs/util/applyMixins';
import {IValidated} from '../ivalidated';

@Component({
  selector: 'app-money-input',
  templateUrl: './money-input.component.html',
  styles: [],
  providers: [MakeProvider(MoneyInputComponent)]
})
export class MoneyInputComponent extends NumberInputValidatedComponent implements IValidated {

  max = DEC_MAX_VALUE;
  config = {
    required: 'Pole nie może być puste',
    range: 'Pole musi być mniejsze od 999999999'
  };

}

applyMixins(MoneyInputComponent, [IValidated]);

