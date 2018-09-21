import {Component, Injector, Input} from '@angular/core';
import {AbstractValueAccessor, MakeProvider} from '../abstract-value-accessor.component';
import {newId} from '../../../../util/utils';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [MakeProvider(DatePickerComponent)]
})
export class DatePickerComponent extends AbstractValueAccessor<Date> {

  @Input() placeholder: string;
  id = newId();
  @Input() label: string;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() submitted: boolean;

  constructor(injector: Injector) {
    super(injector);
  }

  config = {
    required: 'Pole nie może być puste',
    date: 'Data musi być późniejsza od daty dzisiejszej'
  };

}
