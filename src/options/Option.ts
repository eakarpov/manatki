import {match, None, I, Matcher} from "../../src";

// export interface Traversable<T, K<T>> {
//   map<P>(f: (val: T) => P): K<P|T>;
//   flatMap<P>(f: (val: T) => K<P>): K<T|P>;
//   coflatMap<P>(f: (val: any) => P): K<T|P>;
//   forEach(f: (val: T) => void): void;
//   filter(pred: (val: T) => boolean): K<T>;
//   flatten(): K<T>;
// }

export interface Optionable<T> {
  getOrElse<V>(stopGap: V): T|V;
  orElse<V>(fallback: Option<V>): Option<T|V>;

  isEmpty: boolean;
  isDefined: boolean;

  match<P>(object: Matcher<Option<T>, P>): any; // TODO

  map<P>(func: (val: T) => P): Option<P|T>;
  flatMap<P>(func: (val: T) => Option<P>): Option<T|P>;
  coflatMap<P>(func: (val: Option<T>) => P): Option<T|P>;
  combine<P>(that: Option<P>): Option<T|P>;
  forEach(func: (val: T) => void): void;
  filter(pred: (val: T) => boolean): Option<T>;
  flatten(): Option<T>;
  fold<S>(f: (val: T) => S, g: () => S): S;
  exists(pred: (val: T) => boolean): boolean;
  forall(pred: (val: T) => boolean): boolean;
}

/**
 * @class Option[T]
 * Optional value of T type
 */
export class Option<T> implements Optionable<T> {
  /**
   * @static
   * @param {T} value
   * @returns {Option<any>}
   * @constructor
   */
  static Some<T>(value: T) {
    return new Option(value);
  }

  /**
   * @static
   * @returns {Option<any>}
   * @constructor
   */
  static None() {
    return new Option();
  }

  protected value?: T;
  isEmpty: boolean;
  isDefined: boolean;

  /**
   *
   * @param {T} value
   */
  constructor(value?: T) {
    this.value = value;
    this.isEmpty = value === void 0;
    this.isDefined = value !== void 0;
  }

  /**
   *
   * @param {V} stopGap
   * @returns {V | T}
   */
  getOrElse<V>(stopGap: V): T|V {
    return this.value || stopGap;
  }

  /**
   *
   * @param {Option<V>} fallback
   * @returns {Option<V | T>}
   */
  orElse<V>(fallback: Option<V>): Option<T|V> {
    return this.isDefined ? this : fallback;
  }

  /**
   *
   * @param {(val: T) => P} func
   * @returns {Option<T | P>}
   */
  map<P>(func: (val: T) => P): Option<P|T> {
    return this.isDefined ? new Option(func(this.value)) : this;
  }

  /**
   *
   * @param {(val: T) => Option<P>} func
   * @returns {Option<P | T>}
   */
  flatMap<P>(func: (val: T) => Option<P>): Option<T|P> {
    return this.isDefined ? func(this.value) : this;
  }

  /**
   *
   * @param {(val: Option<T>) => P} func
   * @returns {Option<P | T>}
   */
  coflatMap<P>(func: (val: Option<T>) => P): Option<T|P> {
    return this.isDefined ? new Option(func(this)) : this;
  }

  /**
   *
   * @param {(val: T) => void} func
   */
  forEach(func: (val: T) => void): void {
    this.isDefined && func(this.value);
  }

  /**
   *
   * @param {(val: T) => boolean} pred
   * @returns {Option<T>}
   */
  filter(pred: (val: T) => boolean): Option<T> {
    return (this.isDefined && pred(this.value)) ? this : None;
  }

  /**
   *
   * @returns {Option<K | T>}
   */
  flatten<K>(): Option<T|K> {
    return this.isDefined
      ? this.value instanceof Option
        ? this.flatMap(I) : this
      : this;
  }

  /**
   *
   * @param {Option<P>} that
   * @returns {Option<P | T>}
   */
  combine<P>(that: Option<P>): Option<T|P> {
    return this.orElse(that);
  }

  fold<S>(f: (val: T) => S, g: () => S): S {
    return this.isDefined ? f(this.value) : g();
  }

  exists(pred: (val: T) => boolean): boolean {
    return this.isDefined && pred(this.value);
  }

  forall(pred: (val: T) => boolean): boolean {
    return this.isEmpty || pred(this.value);
  }

  // TODO: rework
  match<P>(object: Matcher<Option<T>, P>): any {
    return match<Option<T>, P>(this, object);
  }
}
