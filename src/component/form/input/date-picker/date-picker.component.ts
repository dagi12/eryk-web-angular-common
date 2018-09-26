import {Component, Injector, Input, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AbstractValueAccessor, MakeProvider} from '../abstract-value-accessor.component';
import {newId} from '../../../../util/utils';
import {BsDatepickerDirective} from 'ngx-bootstrap';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [MakeProvider(DatePickerComponent)]
})
export class DatePickerComponent extends AbstractValueAccessor<Date> implements OnInit, OnDestroy {

  @ViewChild(BsDatepickerDirective) datepicker: BsDatepickerDirective;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() submitted: boolean;
  id = newId();
  eventOptions: boolean | { capture?: boolean, passive?: boolean };
  config = {
    required: 'Pole nie może być puste',
    date: 'Data musi być późniejsza od daty dzisiejszej'
  };

  scroll = (): void => {
    if (this.datepicker.isOpen) {
      this.ngZone.run(() => {
        this.datepicker.hide();
      });
    }
  }

  constructor(injector: Injector, private ngZone: NgZone) {
    super(injector);
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

}
