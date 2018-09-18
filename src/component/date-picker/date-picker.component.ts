import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BsLocaleService} from 'ngx-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
  }]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string;
  onChange;

  constructor(private localeService: BsLocaleService) {
    this.localeService.use('pl');
  }

  private _model = null;

  get model(): any {
    return this._model;
  }

  set model(model: any) {
    this.writeValue(model);
    this._model = model;
  }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    if (this.onChange) {
      this.onChange(obj);
    }
    this._model = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }


}
