import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-label-wrapper',
  templateUrl: './label-wrapper.component.html',
  styleUrls: ['./label-wrapper.component.scss']
})
export class LabelWrapperComponent implements OnInit {
  @Input() label: string;
  @Input() style: string;

  constructor() {
  }

  ngOnInit() {
  }

}
