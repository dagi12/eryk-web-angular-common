import {Component, Input} from '@angular/core';
import {TextAreaComponent} from '../../input/text-area/text-area.component';
import {MakeProvider} from '../../input/abstract-value-accessor.component';

@Component({
  selector: 'app-text-area-validated',
  templateUrl: './text-area-validated.component.html',
  styles: [],
  providers: [MakeProvider(TextAreaValidatedComponent)]
})
export class TextAreaValidatedComponent extends TextAreaComponent {

  @Input() submitted: boolean;

}
