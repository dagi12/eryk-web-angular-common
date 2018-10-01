import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() {
  }

  isError(control: FormControl, submitted: boolean) {
    return !control.valid && (!control.pristine || submitted);
  }

}
