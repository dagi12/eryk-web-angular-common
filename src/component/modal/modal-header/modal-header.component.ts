import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent implements OnInit {

  @Output() close = new EventEmitter();
  @Input() helpContent: string;
  @Input() modalTitle: string;

  constructor() {
  }

  closeCallback() {
    this.close.emit();
  }

  ngOnInit() {
  }

}
