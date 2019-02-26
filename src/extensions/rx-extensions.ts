import {Observable as Obs} from 'rxjs/Observable';
import {defer} from 'rxjs/observable/defer';

export type Transformer<T> = (_: Obs<T>) => Obs<T>;

declare module 'rxjs/Observable' {
  interface Observable<T> {
    doOnSubscribe(this: Obs<T>, onSubscribe: Function): Obs<T>;
  }
}

function doOnSubscribe<T>(this: Obs<T>, onSubscribe: Function): Obs<T> {
  return defer(() => {
    onSubscribe(this);
    return this;
  });
}

Obs.prototype.doOnSubscribe = doOnSubscribe;
