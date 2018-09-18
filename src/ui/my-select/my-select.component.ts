import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {FormControlComponent} from '../../component/form-control/form-control.component';
import {ValueLabelPair} from './value-label-pair';
import {requiredProps} from '../../util/util.service';


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
// TODO make AbstractValueAccessor
export class MySelectComponent extends FormControlComponent implements OnInit {

  @Input() map: ValueLabelPair<any>[];
  @Input() label: string;

  constructor() {
    super();
  }

  ngOnInit() {
    requiredProps(this.label, this.map);
  }

}
