import { EventEmitter, forwardRef, Injectable, Injector, OnInit, Output, Type } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isError } from '../validated/common-validators';
import { IValidated } from '../validated/ivalidated';

@Injectable()
export abstract class AbstractValueAccessor<T = string> implements ControlValueAccessor, OnInit {

  formControl: FormControl;
  submitted: boolean;
  @Output() blur = new EventEmitter();

  constructor(private injector: Injector) {
  }

  _value: T;

  get value(): T {
    return this._value;
  }

  set value(v: T) {
    if (v !== this._value) {
      this.writeValue(v);
    }
  }

  // don't change that to pass emitter
  // noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
  onBlur() {
    this.blur.emit();
  }

  // changed because form controls turns red onClose despite they are disabled
  locIsError() {
    if (this.formControl && !this.formControl.disabled) {
      return isError(this.formControl, this.submitted);
    }
    return false;
  }

  // noinspection JSUnusedLocalSymbols
  onChange(_: any) {
  }

  onTouched() {
  }

  writeValue(value: any) {
    this._value = value;
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
      this.formControl = <FormControl>ngControl;
    }
  }

}

export function MakeProvider<T extends IValidated>(type: Type<T>) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  };
}
