import {FormControlDirective} from '@angular/forms';

export class IValidated {
  public formControl: FormControlDirective;

  // noinspection JSUnusedGlobalSymbols
  onBlur() {
    if (this.formControl) {
      this.formControl.control.markAsDirty();
    }
  }

}
