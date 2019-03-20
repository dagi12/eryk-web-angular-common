import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopNavbarComponent implements OnInit {
  @Input() title: string;
  @Input() helpContent: string;
  @Output() onMinimize = new EventEmitter();
  production: boolean;

  reset() {
    localStorage.clear();
    location.reload();
  }

  ngOnInit(): void {
    this.production = environment.production;
  }
}
