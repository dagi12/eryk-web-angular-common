import {FormControl} from '@angular/forms';

export abstract class ValidatedComponent {

  abstract required: boolean;
  abstract submitted: boolean;
  formControl: FormControl;


}
