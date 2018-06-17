import {Optionable, Option} from "./Option";
import {Monad} from "../algrebra/Monad";

export interface Some<T> extends Optionable<T>, Monad<T> {
  get: () => T;
  bind<U>(f: (val: T) => Option<U>): Option<U>;
}

/**
 * @class SomeClass
 * Some generator
 * @extends {Option<T>}
 * @implements {Some<T>}
 */
class SomeClass<T> extends Option<T> implements Some<T> {
  constructor(value: T) {
    super(value);
  }
  get() {
    return this.value;
  }
}


export function Some<T>(value: T): Some<T> {
  return new SomeClass(value);
}
