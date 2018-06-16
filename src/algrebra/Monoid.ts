import {Semigroup} from "./Semigroup";
import {lFold} from "../lambda/fold";
import {Either} from "../eithers";
import {EitherM} from "..";

export abstract class Monoid<T> extends Semigroup<T> {
  abstract empty(): T;
  isEmpty: () => boolean;
  combineAll(...args: T[]): T {
    return lFold(this.combine)(args)(this.empty());
  }
  static of<T>(Type: any): Monoid<T> { // TODO: is not working
    if (Type.__proto__ === Monoid) return Type;
    switch (Type.name) {
      case Either.name: return EitherM.constructor as any as Monoid<T>; // TODO: empty is not present??
      default: throw new Error("Type is not yet supported");
    }
  }
}