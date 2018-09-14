import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {

  @Input() label: string;

  constructor() {
  }

  ngOnInit() {
  }

}
