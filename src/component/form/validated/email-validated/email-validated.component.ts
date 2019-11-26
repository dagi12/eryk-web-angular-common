import { Component, Injector, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AbstractValueAccessor, MakeProvider } from '../../input/abstract-value-accessor.component';

@Component({
  selector: 'app-email-validated',
  templateUrl: './email-validated.component.html',
  styles: [],
  providers: [MakeProvider(EmailValidatedComponent)]
})
export class EmailValidatedComponent extends AbstractValueAccessor {
  @Input() submitted: boolean;
  @Input() label = this.translateService.instant('EMAIL');
  @Input() placeholder = this.translateService.instant('ENTER_EMAIL');

  constructor(injector: Injector, private translateService: TranslateService) {
    super(injector);
  }

  errorConfig = {
    error: this.translateService.instant('INCORRECT_EMAIL'),
    nonUnique: this.translateService.instant('NAME_IS_USED')
  };
}
