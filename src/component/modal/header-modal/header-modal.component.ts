import {Component, EventEmitter, Input, Output} from '@angular/core';
import {passEmitter} from '../../../util/utils';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styles: []
})
export class HeaderModalComponent {

  @Input() icon = 'fa-info';
  @Input() modalTitle: string;
  @Input() helpContent: string;
  @Output() close = new EventEmitter();
  locClose = passEmitter(this.close);


}
