import {Either} from "./Either";
import {Monoid} from "./help";

export class EitherM<K, T extends Monoid<T>> extends Either<K, T> implements Monoid<T> {
  empty: T;
  isEmpty() {
    return this._right !== this.empty;
  }
  combine(val: T) {
    return this.empty;
  }
  combineAll() {
    return this.empty;
  }
  constructor(value: T) {
    super(void 0, value);
    this.empty = value.empty;
  }
}
