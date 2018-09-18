import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import {DIGIT_REGEXP, LOWER_CHAR_REGEXP, PASSWORD_LENGTH, SPECIAL_CHAR_REGEXP, UPPER_CHAR_REGEXP} from '../util/const';

export function mailValidator(control: AbstractControl) {
  const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  if (control.value && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
    return {error: true};
  }
  return null;
}

export function requiredUniqueUserName(clientUsers: any[]): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.value) {
      return {error: true};
    } else if (clientUsers.filter(item => item.email === control.value).length !== 0) {
      return {nonUnique: true};
    }
    return null;
  };
}

export function validateTextMask(placeholderChar?: string): ValidatorFn {
  return (control: AbstractControl) => {
    placeholderChar = placeholderChar ? placeholderChar : '_';
    if (!control.value || control.disabled) {
      return null;
    } else if (!control.value.includes(placeholderChar)) {
      return null;
    }
    return {error: true};
  };
}

export function dateOrder(control) {
  const dataOd = control.get('dataOd');
  const dataDo = control.get('dataDo');

  if (!dataOd || !dataDo) {
    return new Error('Null control');
  }
  if (!dataOd.value) {
    return {empty: true};
  }
  if (!dataDo.value) {
    return null;
  }
  if (dataOd.value === dataDo.value) {
    return {same: true};
  }
  if (new Date(dataOd.value).getTime() > new Date(dataDo.value).getTime()) {
    return {beginning: true};
  }
  return null;
}


export const passwordValidator: ValidatorFn = (control: AbstractControl) => {
  if (!control.value) {
    return {empty: true};
  } else if (control.value.length < PASSWORD_LENGTH) {
    return {length: true};
  } else if (!UPPER_CHAR_REGEXP.test(control.value)) {
    return {upperChar: true};
  } else if (!LOWER_CHAR_REGEXP.test(control.value)) {
    return {lowerChar: true};
  } else if (!SPECIAL_CHAR_REGEXP.test(control.value)) {
    return {specialChar: true};
  } else if (!DIGIT_REGEXP.test(control.value)) {
    return {digit: true};
  }
  return null;
};

export type ErrorChecker = (control: FormControl, submitted: boolean) => boolean;

export const isError: ErrorChecker = (control: FormControl, submitted: boolean) => !control.valid && (!control.pristine || submitted);
