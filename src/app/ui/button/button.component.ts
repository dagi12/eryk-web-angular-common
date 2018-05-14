import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  @Input() style: string;
  @Input() wrapperStyle: string;
  @Input() disabled: boolean;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  clickCallbackBound() {
    this.onClick.emit();
  }

  ngOnInit() {
    if (!this.label) {
      throw new Error('attribute is required');
    }
    if (!this.onClick) {
      throw new Error('attribute is required');
    }
    if (!this.style) {
      this.style = 'btn-primary';
    }
    if (this.wrapperStyle && !new RegExp('^.*col-md-.*$').test(this.wrapperStyle)) {
      this.wrapperStyle = this.wrapperStyle + ' col-md-3';
    } else if (!this.wrapperStyle) {
      this.wrapperStyle = 'col-md-3';
    }
  }

}
