import {AbstractControl, ValidatorFn} from '@angular/forms';

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
