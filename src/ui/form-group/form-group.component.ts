import {Component, Input, OnInit} from '@angular/core';
import {ClassNames} from './class-names';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {

  @Input() label: string;
  @Input() error: boolean;
  formClasses: ClassNames;

  constructor() {
  }

  ngOnInit() {
    this.formClasses = {
      'has-error': this.error
    };
  }

}

