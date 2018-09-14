import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-preview-input',
  templateUrl: './preview-input.component.html',
  styles: []
})
export class PreviewInputComponent implements OnInit {

  @Input() value: any;
  @Input() label: string;

  constructor() {
  }

  ngOnInit() {
  }

}
