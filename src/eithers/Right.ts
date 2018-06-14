import {Either, Validatable} from './Either';

export interface Right<T> extends Validatable<any, T> {}

class RightClass<T> extends Either<any, T> implements Right<T> {
  constructor(val: T) {
    super(void 0, val);
  }
}

export function Right<T>(val: T): Right<T> {
  return new RightClass<T>(val);
}