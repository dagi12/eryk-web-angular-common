import {Component, Input, OnInit} from '@angular/core';
import {MakeProvider} from '../../abstract/abstract-value-accessor.component';
import {TextInputComponent} from '../../ui/text-input/text-input.component';
import {FormControl} from '@angular/forms';
import {isError} from '../common-validators';

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
