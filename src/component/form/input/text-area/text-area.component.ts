import {Component, Input} from '@angular/core';
import {AbstractValueAccessor, MakeProvider} from '../abstract-value-accessor.component';


@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  providers: [MakeProvider(TextAreaComponent)]
})
export class TextAreaComponent extends AbstractValueAccessor {

  @Input() label: string;
  @Input() error: boolean;
  @Input() placeholder: string;
  @Input() rows = 3;
  @Input() required: boolean;
  @Input() disabled: boolean;

}
