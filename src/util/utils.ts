import {EventEmitter} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {NgxSpinnerService} from 'ngx-spinner';
import {Transformer} from '../extensions/rx-extensions';
import {Observable} from 'rxjs/Observable';

export function stubFun() {
  if (!environment.production) {
    console.log('stub fun');
  }
}

export type EmitterPass = (event: any) => void;
export const passEmitter = <T>(emitter: EventEmitter<T>): EmitterPass => (event: T) => emitter.emit(event);

let lastId = 0;

export function newId(): string {
  lastId++;
  return lastId.toString();
}

export const defaultValues = (object: {}, values: {}) => {
  for (const key in values) {
    if (values.hasOwnProperty(key)) {
      object[key] = object[key] || values[key];
    }
  }
  return object;
};

export function spinner<T>(spinnerService: NgxSpinnerService): Transformer<T> {
  return (obs: Observable<T>): Observable<T> =>
    obs
      .doOnSubscribe(() => spinnerService.show())
      .finally(() => spinnerService.hide());
}
