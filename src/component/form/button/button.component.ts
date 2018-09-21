import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {requiredProps} from '../../../util/util.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label = 'Zatwierdź';
  @Input() style = 'btn-primary';
  @Input() wrapperStyle: string;
  @Input() disabled: boolean;
  @Input() icon = 'fa-check';
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
