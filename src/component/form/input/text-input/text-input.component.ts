import {Component, Input} from '@angular/core';
import {AbstractValueAccessor, MakeProvider} from '../abstract-value-accessor.component';
import {newId} from '../../../../util/utils';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [MakeProvider(TextInputComponent)]
})
export class TextInputComponent extends AbstractValueAccessor {

  @Input() label: string;
  @Input() disabled: boolean;
  @Input() error: boolean;
  @Input() required: boolean;
  @Input() maxLength = 19;
  id = newId();

}
