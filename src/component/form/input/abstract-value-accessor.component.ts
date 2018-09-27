import {EventEmitter, forwardRef, Injectable, Injector, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControlDirective, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {isError} from '../validated/common-validators';

@Injectable()
export abstract class AbstractValueAccessor<T = string> implements ControlValueAccessor, OnInit {

  formControl: FormControlDirective;
  submitted: boolean;
  @Output() blur = new EventEmitter();

  constructor(private injector: Injector) {
  }

  private _value: T;

  get value(): T {
    return this._value;
  }

  set value(v: T) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  // noinspection JSUnusedGlobalSymbols
  onBlur() {
    this.blur.emit();
  }

  locIsError() {
    return isError(this.formControl.control, this.submitted);
  }

  // noinspection JSUnusedLocalSymbols
  onChange(_: any) {
  }

  onTouched() {
  }

  writeValue(value: any) {
    this._value = value;
    // warning: comment below if only want to emit on user intervention
    this.onChange(value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnInit() {
    const ngControl = this.injector.get(NgControl, null);
    if (ngControl) {
      this.formControl = <FormControlDirective> ngControl;
    }
  }

}

export function MakeProvider(type: any) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  };
}
