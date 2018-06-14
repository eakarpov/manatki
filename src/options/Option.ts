import {match, Matcher} from "../../src";

export interface Optionable<T> {
  isEmpty: boolean;
  getOrElse<V>(stopGap: V): T|V;
}

export interface Option<T> {
  value?: T;
}

export class Option<T> implements Option<T> {
  static Some<T>(value: T) {
    return new Option(value);
  }
  static None() {
    return new Option();
  }

  value?: T;
  isEmpty: boolean;

  constructor(value?: T) {
    this.value = value;
    this.isEmpty = value !== void 0;
  }

  getOrElse<V>(stopGap: V): T|V {
    return this.value || stopGap;
  }

  // TODO: rework
  match<P>(object: Matcher<Option<T>, P>) {
    return match<Option<T>, P>(this, object);
  }
}
