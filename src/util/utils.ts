import {EventEmitter} from '@angular/core';
import {environment} from '../../../../environments/environment';

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
