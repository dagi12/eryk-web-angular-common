import { Component, Input } from '@angular/core';
import { MAX_VALUE } from '../../../../util/const';
import { newId } from '../../../../util/utils';
import { AbstractValueAccessor, MakeProvider } from '../abstract-value-accessor.component';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styles: [],
  providers: [MakeProvider(NumberInputComponent)]
})
export class NumberInputComponent extends AbstractValueAccessor<number> {

  @Input() label: string;
  id = newId();
  max = MAX_VALUE;

}
