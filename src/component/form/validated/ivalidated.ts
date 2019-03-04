import {FormControl, FormControlDirective} from '@angular/forms';

export class IValidated {
  formControl: FormControl;

  // noinspection JSUnusedGlobalSymbols
  onBlur() {
    // noinspection SuspiciousInstanceOfGuard
    if (this.formControl && this.formControl instanceof FormControlDirective) {
      this.formControl.control.markAsDirty();
    }
  }

}
