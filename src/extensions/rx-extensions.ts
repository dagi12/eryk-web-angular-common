import {Observable} from 'rxjs/Observable';
import {defer} from 'rxjs/observable/defer';

export type Transformer<T> = (_: Observable<T>) => Observable<T>;

declare module 'rxjs/Observable' {
  // noinspection TsLint
  interface Observable<T> {
    compose(this: Observable<T>, func: Transformer<T>): Observable<T>;

    doOnSubscribe(this: Observable<T>, onSubscribe: Function): Observable<T>;
  }
}

function doOnSubscribe<T>(this: Observable<T>, onSubscribe: Function): Observable<T> {
  return defer(() => {
    onSubscribe(this);
    return this;
  });
}

function compose<T>(this: Observable<T>, func: Transformer<T>) {
  return func(this);
}

Observable.prototype.compose = compose;
Observable.prototype.doOnSubscribe = doOnSubscribe;

