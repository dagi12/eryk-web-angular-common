import { Component, Injector, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MakeProvider } from '../../input/abstract-value-accessor.component';
import { NumberInputComponent } from '../../input/number-input/number-input.component';

@Component({
  selector: 'app-number-input-validated',
  templateUrl: './number-input-validated.component.html',
  styles: [],
  providers: [MakeProvider(NumberInputValidatedComponent)]
})
export class NumberInputValidatedComponent extends NumberInputComponent {
  constructor(private translateService: TranslateService, injector: Injector) {
    super(injector);
  }

  @Input() required: boolean;
  @Input() submitted: boolean;
  @Input() config = {
    required: this.translateService.instant('THE_FIELD_CANNOT_BE_EMPTY'),
    max: this.translateService.instant('THE_FIELD_MUST_BE_LESS'),
    min: this.translateService.instant('THE_FIELD_MUST_BE_LARGER')
  };
}
