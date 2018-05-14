import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {FormControlComponent} from '../../form-control/form-control.component';


@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MySelectComponent),
    multi: true
  }]
})
export class MySelectComponent extends FormControlComponent implements OnInit {


  @Input() map: ValueLabelPair[];
  @Input() label: string;

  constructor() {
    super();
  }

  ngOnInit() {
    if (!this.label) {
      throw new Error('attribute is required');
    }
    if (!this.map) {
      throw new Error('attribute is required');
    }
  }

}

export class ValueLabelPair {
  constructor(public value?: any, public label?: string) {
  }
}
