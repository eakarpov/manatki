import {Optionable, Option} from "./Option";

export interface Some<T> extends Optionable<T> {
  get: () => T;
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
