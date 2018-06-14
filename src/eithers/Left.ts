import {Validatable, Either} from './Either';

export interface Left<T> extends Validatable<T, any> {

}

class LeftClass<T> extends Either<T, any> implements Left<T> {
  constructor(val: T) {
    super(val, void 0);
  }
}

export function Left<T>(val: T): Left<T> {
  return new LeftClass<T>(val);
}