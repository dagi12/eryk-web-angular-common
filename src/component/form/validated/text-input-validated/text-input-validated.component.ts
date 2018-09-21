import {Component, Input, OnInit} from '@angular/core';
import {MakeProvider} from '../../input/abstract-value-accessor.component';
import {FormControl} from '@angular/forms';
import {isError} from '../common-validators';
import {TextInputComponent} from '../../input/text-input/text-input.component';

@Component({
  selector: 'app-text-input-validated',
  templateUrl: './text-input-validated.component.html',
  styles: [],
  providers: [MakeProvider(TextInputValidatedComponent)]
})
export class TextInputValidatedComponent extends TextInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() submitted: boolean;
  locIsError = () => isError(this.control, this.submitted);

  ngOnInit() {
  }

}
