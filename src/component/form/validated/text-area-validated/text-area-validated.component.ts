import {Component, Input} from '@angular/core';
import {TextAreaComponent} from '../../input/text-area/text-area.component';
import {MakeProvider} from '../../input/abstract-value-accessor.component';
import {applyMixins} from 'rxjs/util/applyMixins';
import {IValidated} from '../ivalidated';

@Component({
  selector: 'app-text-area-validated',
  templateUrl: './text-area-validated.component.html',
  styles: [],
  providers: [MakeProvider(TextAreaValidatedComponent)]
})
export class TextAreaValidatedComponent extends TextAreaComponent implements IValidated {

  @Input() submitted: boolean;

}

applyMixins(TextAreaValidatedComponent, [IValidated]);
