import {Component, Input} from '@angular/core';
import {MakeProvider} from '../../input/abstract-value-accessor.component';
import {TextInputComponent} from '../../input/text-input/text-input.component';
import {IValidated} from '../ivalidated';
import {applyMixins} from 'rxjs/util/applyMixins';

@Component({
  selector: 'app-text-input-validated',
  templateUrl: './text-input-validated.component.html',
  styles: [],
  providers: [MakeProvider(TextInputValidatedComponent)]
})
export class TextInputValidatedComponent extends TextInputComponent implements IValidated {

  @Input() submitted: boolean;

}

applyMixins(TextInputValidatedComponent, [IValidated]);
