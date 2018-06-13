import {None, Some, match, Matcher} from "../../src";

export interface Optionable<T> {
  isEmpty: boolean;
  getOrElse<V>(stopGap: V): T|V;
}

export interface Option<T> {
  value: Some<T>|None;
}

export class Option<T> implements Option<T> {
  static Some<T>(value: T) {
    return new Option(Some<T>(value));
  }
  static None() {
    return new Option(None());
  }

  value: Some<T>|None;
  isEmpty: boolean;

  constructor(value: Some<T>|None) {
    this.value = value;
    this.isEmpty = value.isEmpty;
  }

  getOrElse<V>(stopGap: V): T|V {
    return this.value.getOrElse(stopGap);
  }

  // TODO: rework
  match<P>(object: Matcher<Option<T>, P>) {
    return match<Option<T>, P>(this, object);
  }
}
