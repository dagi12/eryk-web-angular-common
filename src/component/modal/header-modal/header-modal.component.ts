import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EmitterPass, passEmitter} from '../../../util/utils';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styles: []
})
export class HeaderModalComponent {

  @Input() modalTitle: string;
  @Input() helpContent: string;
  @Output() close = new EventEmitter();
  locClose: EmitterPass;

  constructor() {
    this.locClose = passEmitter(this.close);
  }


}
