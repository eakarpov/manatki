import {match, Matcher} from "../../src";

export interface Optionable<T> {
  isEmpty: boolean;
  isDefined: boolean;
  getOrElse<V>(stopGap: V): T|V;
  orElse<V>(fallback: Option<V>): Option<T|V>;
  value?: T;
}

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

  // TODO: rework
  match<P>(object: Matcher<Option<T>, P>) {
    return match<Option<T>, P>(this, object);
  }
}
