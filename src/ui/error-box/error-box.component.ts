import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-error-box',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.scss']
})
export class ErrorBoxComponent implements OnInit {

  @Input() control: FormControl;
  @Input() submitted: boolean;
  @Input() valid: boolean;
  @Input() message: string;

  constructor() {
  }

  ngOnInit() {
  }

}
