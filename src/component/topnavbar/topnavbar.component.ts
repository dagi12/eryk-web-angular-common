import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopNavbarComponent {
  @Input() clientName: string;
  @Input() title: string;
  @Input() helpContent: string;
  @Output() onMinimize = new EventEmitter();
}
