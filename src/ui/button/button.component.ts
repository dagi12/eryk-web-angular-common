import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {requiredProps} from '../../../../eryk-web-client-common/src/util.service.js';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  @Input() style = 'btn-primary';
  @Input() wrapperStyle: string;
  @Input() disabled: boolean;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  clickCallbackBound() {
    this.onClick.emit();
  }

  ngOnInit() {
    requiredProps(this.label, this.onClick);
    if (this.wrapperStyle && !new RegExp('^.*col-md-.*$').test(this.wrapperStyle)) {
      this.wrapperStyle = this.wrapperStyle + ' col-md-4';
    } else if (!this.wrapperStyle) {
      this.wrapperStyle = 'col-md-4';
    }
  }

}
