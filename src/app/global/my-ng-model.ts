import {ControlValueAccessor} from '@angular/forms';

export class MyNgModel<T> implements ControlValueAccessor {

  onChange = null;
  public model: T;

  writeValue(obj: any): void {
    this.onChange(obj);
    this.model = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }


}
