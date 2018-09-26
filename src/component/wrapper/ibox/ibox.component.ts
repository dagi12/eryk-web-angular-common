import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ibox',
  templateUrl: './ibox.component.html',
    styleUrls: ['./ibox.component.css']
})
export class IboxComponent implements OnInit {

  @Input() collapsable: boolean;
  @Input() title: string;
  @Input() helpContent: string;
  @Input() isCollapsed;

  constructor() {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
  }

}
