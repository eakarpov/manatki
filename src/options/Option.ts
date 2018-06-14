import {match, None, I, Matcher} from "../../src";

export interface Traversable<T> {
  map<P>(func: (val: T) => P): Option<P|T>;
  flatMap<P>(func: (val: T) => Option<P>): Option<T|P>;
  coflatMap<P>(func: (val: Option<T>) => P): Option<T|P>;
  combine<P>(that: Option<P>): Option<T|P>;
  forEach(func: (val: T) => void): void;
  filter(pred: (val: T) => boolean): Option<T>;
  flatten(): Option<T>;
}

export interface Optionable<T> extends Traversable<T> {
  isEmpty: boolean;
  isDefined: boolean;
  getOrElse<V>(stopGap: V): T|V;
  orElse<V>(fallback: Option<V>): Option<T|V>;
  match<P>(object: Matcher<Option<T>, P>): any; // TODO
  value?: T;
}

/**
 * @class Option[T]
 * Optional value of T type
 */
export class Option<T> implements Optionable<T> {
  static Some<T>(value: T) {
    return new Option(value);
  }
  static None() {
    return new Option();
  }

  value?: T;
  isEmpty: boolean;
  isDefined: boolean;

  constructor(value?: T) {
    this.value = value;
    this.isEmpty = value === void 0;
    this.isDefined = value !== void 0;
  }

  getOrElse<V>(stopGap: V): T|V {
    return this.value || stopGap;
  }
  orElse<V>(fallback: Option<V>): Option<T|V> {
    return this.isDefined ? this : fallback;
  }

  map<P>(func: (val: T) => P): Option<P|T> {
    return this.isDefined ? new Option(func(this.value)) : this;
  }

  flatMap<P>(func: (val: T) => Option<P>): Option<T|P> {
    return this.isDefined ? func(this.value) : this;
  }

  coflatMap<P>(func: (val: Option<T>) => P): Option<T|P> {
    return this.isDefined ? new Option(func(this)) : this;
  }

  forEach(func: (val: T) => void): void {
    this.isDefined && func(this.value);
  }

  filter(pred: (val: T) => boolean): Option<T> {
    return (this.isDefined && pred(this.value)) ? this : None;
  }

  flatten<K>(): Option<T|K> {
    return this.isDefined
      ? this.value instanceof Option
        ? this.flatMap(I) : this
      : this;
  }

  combine<P>(that: Option<P>): Option<T|P> {
    return this.orElse(that);
  }

  // TODO: rework
  match<P>(object: Matcher<Option<T>, P>): any {
    return match<Option<T>, P>(this, object);
  }
}
