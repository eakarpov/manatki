import {Monad} from "../algrebra/Monad";
import {Extension, Optionized, Validated} from "../implicits/types";
import {Option} from "../options";
import {Either} from "../eithers";
import {lFold} from "../lambda/fold";
import {Monoid} from "../algrebra";

/**
 * Wrapper over Array
 */
export class List<T> extends Monad<T> implements Optionized<T[]>, Validated<T[]>, Monoid<List<T>> {
  private _list: T[];

  empty() {
    return new List<T>();
  }

  isEmpty() {
    return this._list.length === 0;
  }

  bind<U>(f: (val: T) => List<U>): List<U> {
    return this._list.reduce((p: List<U>, c: T) => p.combine(f(c)), new List<U>());
  }

  get(i: number): Option<T> {
    const elem = this._list.find((e, i) => i === i);
    return elem ? Option.Some(elem) : Option.None();
  }

  append(x: T): List<T> {
    const newList = [...this._list];
    newList.push(x);
    return new List(...newList);
  }

  forEach(func: (elem: T, i: number) => void): void {
    this._list.forEach(func);
  }

  clone(): List<T> {
    const newList = [...this._list];
    return new List<T>(...newList);
  }

  combine(x: List<T>): List<T> {
    const newList = x.clone();
    this.forEach((e: T) => newList.append(e));
    return newList;
  }

  combineAll(...args: List<T>[]): List<T> {
    const f = (a: List<T>, b: List<T>) => this.combine.apply(a, [b]);
    const a = this;
    return lFold<List<T>>(f)([a, ...args])(this.empty());
  }

  toSome(): Option<T[]> {
    return Option.Some(this._list);
  }

  asLeft(): Either<T[], any> {
    return Either.Left(this._list);
  }

  asRight(): Either<any, T[]> {
    return Either.Right(this._list);
  }

  static unit<T>(x: T): List<T> {
    return new List<T>(x);
  }

  constructor(...args: T[]) {
    super();
    this._list = [];
    args.forEach(arg => this._list.push(arg));
  }
}