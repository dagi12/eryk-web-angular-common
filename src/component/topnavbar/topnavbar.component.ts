import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopNavbarComponent {
  @Input() clientName: string;
  @Input() title: string;
}
