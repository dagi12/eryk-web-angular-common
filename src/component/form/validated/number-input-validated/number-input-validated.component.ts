import {Component, Input, OnInit} from '@angular/core';
import {newId} from '../../../../util/utils';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-number-input-validated',
  templateUrl: './number-input-validated.component.html',
  styles: []
})
export class NumberInputValidatedComponent implements OnInit {

  @Input() label: string;
  @Input() disabled: boolean;
  @Input() error: boolean;
  @Input() required: boolean;
  @Input() control: FormControl;
  id = newId();

  constructor() {
  }

  ngOnInit() {
  }

}
