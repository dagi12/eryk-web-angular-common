import {FormControl, FormControlDirective} from '@angular/forms';

export class IValidated {
  public formControl: FormControl;

  // noinspection JSUnusedGlobalSymbols
  onBlur() {
    if (this.formControl && this.formControl instanceof FormControlDirective) {
      this.formControl.control.markAsDirty();
    }
  }

}
