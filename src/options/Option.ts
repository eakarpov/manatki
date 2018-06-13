import {None, Some} from "../../src";

export interface Optionable<T> {
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
    return new Option(None);
  }

  value: Some<T>|None;

  constructor(value: Some<T>|None) {
    this.value = value;
  }

  getOrElse<V>(stopGap: V): T|V {
    return this.value.getOrElse(stopGap);
  }
}
