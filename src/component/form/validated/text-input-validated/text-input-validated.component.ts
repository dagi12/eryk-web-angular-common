import {Component, Input} from '@angular/core';
import {MakeProvider} from '../../input/abstract-value-accessor.component';
import {FormControl} from '@angular/forms';
import {TextInputComponent} from '../../input/text-input/text-input.component';

@Component({
  selector: 'app-text-input-validated',
  templateUrl: './text-input-validated.component.html',
  styles: [],
  providers: [MakeProvider(TextInputValidatedComponent)]
})
export class TextInputValidatedComponent extends TextInputComponent {

  @Input() control: FormControl;
  @Input() submitted: boolean;

}
