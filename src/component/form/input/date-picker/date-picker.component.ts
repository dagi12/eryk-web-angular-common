import { Component, Injector, Input, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { BsDatepickerDirective } from 'ngx-bootstrap';
import 'rxjs/add/observable/fromEvent';
import { MyMobileDetectService } from '../../../../service/my-mobile-detect.service';
import { fromDateToDateInputValue } from '../../../../util/date.service';
import { newId } from '../../../../util/utils';
import { AbstractValueAccessor, MakeProvider } from '../abstract-value-accessor.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [MakeProvider(DatePickerComponent)]
})
export class DatePickerComponent extends AbstractValueAccessor<Date>
  implements OnInit, OnDestroy {
  @ViewChild(BsDatepickerDirective) datepicker: BsDatepickerDirective;
  @Input() placeholder = this.translateService.instant('CLICK_TO_CHOOSE_THE_DATE');
  @Input() label: string;
  @Input() required: boolean;
  @Input() submitted = false;
  id = newId();
  eventOptions: boolean | { capture?: boolean; passive?: boolean };
  config = {
    required: this.translateService.instant('THE_FIELD_CANNOT_BE_EMPTY'),
    date: this.translateService.instant('DATE_LATER'),
    dateLess: this.translateService.instant('THE_DATE_CANNOT_BE_CHANGED')
  };
  private readonly scroll: () => void;

  constructor(
    injector: Injector,
    private ngZone: NgZone,
    public myMobileDetectService: MyMobileDetectService,
    private translateService: TranslateService
  ) {
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
