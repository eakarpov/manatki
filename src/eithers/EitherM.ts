import {Either} from "./Either";
import {Monoid} from "./help";
import {lFold} from "../lambda/fold";

export class EitherM<K, T extends Monoid<T>> extends Either<K, T> implements Monoid<EitherM<K, T>> {
  empty() {
    return new EitherM<K, T>(void 0, this._right.empty());
  }
  isEmpty() {
    return this._right !== this.empty().right().get();
  }
  combine(that: EitherM<K, T>): EitherM<K, T> {
    return this.isLeft ? this : that.isLeft ? that : new EitherM(void 0, this._right.combine(that.right().get()));
  }
  combineAll(...args: EitherM<K, T>[]) {
    const f = (a: EitherM<K, T>, b: EitherM<K, T>) => this.combine.apply(a, [b]);
    const a = this;
    return lFold<EitherM<K, T>>(f)([a, ...args])(this.empty());
  }
  constructor(left: K, value: T) {
    super(left, value);
  }
}
