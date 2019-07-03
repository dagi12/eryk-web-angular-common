import {Component, Input} from '@angular/core';
import {MakeProvider} from '../../input/abstract-value-accessor.component';
import {NumberInputComponent} from '../../input/number-input/number-input.component';

@Component({
  selector: 'app-number-input-validated',
  templateUrl: './number-input-validated.component.html',
  styles: [],
  providers: [MakeProvider(NumberInputValidatedComponent)]
})
export class NumberInputValidatedComponent extends NumberInputComponent {

  @Input() required: boolean;
  @Input() submitted: boolean;
  @Input() config = {
    required: 'Pole nie może być puste',
    max: 'Pole musi być mniejsze od 1000000',
    min: 'Pole musi być większe od 1'
  };

}
