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
  @Input() required: boolean;
  @Input() for: string;
  labelClasses: ClassNames;

  ngOnInit() {
    this.labelClasses = {'required': this.required};
  }

}

