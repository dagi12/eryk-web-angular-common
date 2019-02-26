import {Component, Injector, Input, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AbstractValueAccessor, MakeProvider} from '../abstract-value-accessor.component';
import {newId} from '../../../../util/utils';
import {BsDatepickerDirective} from 'ngx-bootstrap';
import 'rxjs/add/observable/fromEvent';
import {MyMobileDetectService} from '../../../../service/my-mobile-detect.service';
import {fromDateToDateInputValue} from '../../../../util/date.service';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [MakeProvider(DatePickerComponent)]
})
export class DatePickerComponent extends AbstractValueAccessor<Date> implements OnInit, OnDestroy {

  @ViewChild(BsDatepickerDirective) datepicker: BsDatepickerDirective;
  @Input() placeholder = 'Kliknij, aby wybrać datę...';
  @Input() label: string;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() submitted = false;
  id = newId();
  eventOptions: boolean | { capture?: boolean, passive?: boolean };
  config = {
    required: 'Pole nie może być puste',
    date: 'Data musi być późniejsza od daty dzisiejszej'
  };
  private readonly scroll: () => void;

  constructor(injector: Injector, private ngZone: NgZone, public myMobileDetectService: MyMobileDetectService) {
    super(injector);
    this.scroll = () => {
      if (this.datepicker.isOpen) {
        this.ngZone.run(() => {
          this.datepicker.hide();
        });
      }
    };
  }

  private _mobileValue: string;

  get mobileValue(): string {
    return this._mobileValue;
  }

  set mobileValue(value: string) {
    this._mobileValue = value;
    super.writeValue(moment(value).toDate());
  }

  writeValue(value: Date): void {
    if (this.myMobileDetectService.isMobile) {
      this._mobileValue = fromDateToDateInputValue(value);
    }
    super.writeValue(value);
  }

  ngOnInit() {
    super.ngOnInit();
    this.eventOptions = {
      capture: true,
      passive: true
    };
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.scroll, <any>this.eventOptions);
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, <any>this.eventOptions);
  }

  clear() {
    this.value = void 0;
  }
}
