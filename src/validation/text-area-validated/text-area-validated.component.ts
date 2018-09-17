import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {isError} from '../common-validators';
import {TextAreaComponent} from '../../ui/text-area/text-area.component';

@Component({
  selector: 'app-text-area-validated',
  templateUrl: './text-area-validated.component.html',
  styles: []
})
export class TextAreaValidatedComponent extends TextAreaComponent implements OnInit {

  @Input() control: FormControl;
  @Input() submitted: boolean;

  locIsError = () => isError(this.control, this.submitted);

  ngOnInit() {
  }

}
