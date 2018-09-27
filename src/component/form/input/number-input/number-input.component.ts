import {Component, Input} from '@angular/core';
import {AbstractValueAccessor, MakeProvider} from '../abstract-value-accessor.component';
import {newId} from '../../../../util/utils';
import {MAX_VALUE} from '../../../../util/const';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styles: [],
  providers: [MakeProvider(NumberInputComponent)]
})
export class NumberInputComponent extends AbstractValueAccessor<number> {

  @Input() label: string;
  @Input() disabled: boolean;
  id = newId();
  max = MAX_VALUE;

}
