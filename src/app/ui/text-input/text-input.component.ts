import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() name: string;
  @Input() label: string;
  @Output() modelChange: EventEmitter<any> = new EventEmitter();
  @Input() disabled: boolean;

  constructor() {
  }

  private _model: any;

  get model(): any {
    return this._model;
  }

  @Input()
  set model(value: any) {
    this._model = value;
    this.modelChange.emit(value);
  }

  ngOnInit() {
    if (!this.label) {
      throw new Error('attribute is required');
    }
  }

}
