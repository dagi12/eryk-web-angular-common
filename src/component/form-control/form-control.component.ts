import {EventEmitter, Input, Output} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

export abstract class FormControlComponent implements ControlValueAccessor {

  @Output() protected modelChange = new EventEmitter();
  private propagateChange: (_: any) => void;

  constructor() {
  }

  protected _model: any;

  public get model(): any {
    return this._model;
  }

  @Input()
  public set model(value: any) {
    this._model = value;
    if (this.propagateChange) {
      this.propagateChange(value);
    }
    this.modelChange.emit(value);
  }

  writeValue(obj: any): void {
    if (obj) {
      this._model = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
    fn(this._model);
  }

  registerOnTouched(fn: any): void {
    // niepotrzebne
  }

}
