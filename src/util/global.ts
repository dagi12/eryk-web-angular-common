import {Injector} from '@angular/core';
import 'reflect-metadata';

export interface Constructor<T> {
  // noinspection JSUnusedLocalSymbols
  new (...args: any[]): T;
}

export class Global {
  static injector: Injector;
}

export function resolveTypesManually(ctor) {
  const paramTypes = Reflect.getMetadata('design:paramtypes', ctor);
  const deps = [];
  for (const arg of paramTypes) {
    deps.push(Global.injector.get(arg));
  }
  return deps;
}
