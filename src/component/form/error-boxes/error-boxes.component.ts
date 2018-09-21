import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-error-boxes',
  templateUrl: './error-boxes.component.html',
  styles: []
})
export class ErrorBoxesComponent implements OnInit {

  @Input() submitted: boolean;
  @Input() control: AbstractControl;
  @Input() config: { [_: string]: string };

  constructor() {
  }

  ngOnInit() {
  }

}
