import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ValueLabelPair} from './my-select.component';
import {FormControlComponent} from '../../form-control/form-control.component';


@Component({
  selector: 'app-my-select',
  template: '<div></div>',
  styleUrls: ['./my-select.component.scss']
})
export class MySelectMockComponent extends FormControlComponent implements OnInit {

  @Output() modelChange = new EventEmitter();
  @Input() model: any;
  @Input() map: ValueLabelPair[];
  @Input() label: string;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
