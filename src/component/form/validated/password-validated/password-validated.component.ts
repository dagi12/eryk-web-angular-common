import {Component, Injector, Input} from '@angular/core';
import {AbstractValueAccessor, MakeProvider} from '../../input/abstract-value-accessor.component';
import {ValidationService} from '../validation.service';

@Component({
  selector: 'app-password-validated',
  templateUrl: './password-validated.component.html',
  styles: [],
  providers: [MakeProvider(PasswordValidatedComponent)]
})
export class PasswordValidatedComponent extends AbstractValueAccessor {

  @Input() submitted: boolean;
  @Input() label = 'Hasło';

  readonly config = {
    empty: 'Hasło nie może być puste',
    length: 'Hasło nie może być krótsze niż 6 znaków',
    specialChar: 'Hasło musi zawierać przynajmniej jeden znak specjalny',
    digit: 'Hasło musi zawierać przynajmniej jedną cyfrę',
    upperChar: 'Hasło musi zawierać przynajmniej jedną dużą literę',
    lowerChar: 'Hasło musi zawierać przynajmniej jedną małą literę'
  };

  constructor(injector: Injector, public validationService: ValidationService) {
    super(injector);
  }

}
