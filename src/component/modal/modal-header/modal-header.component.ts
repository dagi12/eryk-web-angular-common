import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {passEmitter} from '../../../util/utils';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.css']
})
export class ModalHeaderComponent implements OnInit {

  @Input() helpContent: string;
  @Input() modalTitle: string;
  @Input() icon = 'fa-info';
  @Output() close = new EventEmitter();
  closeCallback = passEmitter(this.close);

  constructor() {
  }

  ngOnInit() {

  }

}
