import {AbstractControl, FormControl, ValidatorFn, Validators} from '@angular/forms';
import {
  DEC_MAX_VALUE,
  DIGIT_REGEXP,
  LOWER_CHAR_REGEXP,
  MAX_VALUE,
  PASSWORD_LENGTH,
  SPECIAL_CHAR_REGEXP,
  UPPER_CHAR_REGEXP
} from '../../../util/const';
import {isUndefined} from 'ngx-bootstrap/chronos/utils/type-checks';
import {dateWithoutHours} from '../../../util/date.service';

export function mailValidator(control: AbstractControl) {
  const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  if (control.value && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
    return {error: true};
  }
  return null;
}

export const requiredUniqueUserName = (clientUsers: any[]): ValidatorFn => (control: AbstractControl) => {
  if (!control.value) {
    return {error: true};
  } else if (clientUsers.filter(item => item.email === control.value).length !== 0) {
    return {nonUnique: true};
  }
  return null;
};

export const requiredMail = (items: any[]): ValidatorFn => Validators.compose([requiredUniqueUserName(items), mailValidator]);

export const validateTextMask = (placeholderChar?: string): ValidatorFn => (control: AbstractControl) => {
  placeholderChar = placeholderChar ? placeholderChar : '_';
  if (!control.value || control.disabled) {
    return null;
  } else if (!control.value.includes(placeholderChar)) {
    return null;
  }
  return {error: true};
};

export const dateOrder: ValidatorFn = (control: AbstractControl) => {
  const dateFrom = control.get('dateFrom');
  const dateTo = control.get('dateTo');

  if (!dateFrom || !dateTo) {
    return new Error('Null control');
  }
  if (!dateFrom.value) {
    return {empty: true};
  }
  if (!dateTo.value) {
    return null;
  }
  if (dateFrom.value === dateTo.value) {
    return {same: true};
  }
  if (new Date(dateFrom.value).getTime() > new Date(dateTo.value).getTime()) {
    return {beginning: true};
  }
  return null;
};


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

export const ltN = n => value => {
  if (value > n) {
    return {range: true};
  }
  return null;
};

// don't add greater or equal sign (it's already there...)
export const dateGreaterThan = (date: Date): ValidatorFn => control => {
  if (date && (new Date(control.value).getTime() < date.getTime())) {
    return {date: true};
  }
  return null;
};

export const dateLessThan = (date: Date): ValidatorFn => control => {
  if (date && (new Date(control.value).getTime() > date.getTime())) {
    return {dateLess: true};
  }
  return null;
};

export const lessThanIntegerValidation = ltN(MAX_VALUE);

export const lessThanFloatValidation = ltN(DEC_MAX_VALUE);

export const greaterThanToday = dateGreaterThan(dateWithoutHours());

export type ErrorChecker = (control: FormControl, submitted: boolean, valid?: boolean) => boolean;

export const isError: ErrorChecker = (control: FormControl, submitted: boolean, valid?: boolean) => {
  const resValid = isUndefined(valid) ? control.valid : valid;
  return !resValid && (!control.pristine || submitted);
};
