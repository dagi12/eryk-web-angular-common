/* tslint:disable:no-unused-variable */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ibox',
  template: '<div></div>',
  styleUrls: ['./ibox.component.scss']
})
export class IboxMockComponent implements OnInit {

  @Input() collapsable: boolean;
  @Input() title: string;
  @Input() helpContent: string;
  @Input() isCollapsed;

  constructor() {
  }

  ngOnInit() {
  }

}
