import {Component, Input} from '@angular/core';
import {AbstractValueAccessor, MakeProvider} from '../../input/abstract-value-accessor.component';

@Component({
  selector: 'app-email-validated',
  templateUrl: './email-validated.component.html',
  styles: [],
  providers: [MakeProvider(EmailValidatedComponent)]
})
export class EmailValidatedComponent extends AbstractValueAccessor {

  @Input() disabled: boolean;
  @Input() submitted: boolean;
  @Input() label = 'Email';

  errorConfig = {
    error: 'Adres email nieprawidłowy',
    nonUnique: 'Nazwa użytkownika jest już zajęta'
  };

}
