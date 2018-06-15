import {Semigroup} from "./Semigroup";
import {lFold} from "../lambda/fold";

export abstract class Monoid<T> extends Semigroup<T> {
  empty: T;
  isEmpty: () => boolean;
  combineAll(...args: T[]): T {
    return lFold(this.combine)(args)(this.empty);
  }
}