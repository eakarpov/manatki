import {Either} from "./Either";
import {None, Option, Some} from "../options";

export interface Projection<T> {
  getOrElse<P>(val: P): T|P;
  get(): T|never;
  toOption(): Option<T>;
}

export class LProjection<K, T> implements Projection<K> {
  private readonly value: Either<K, T>;
  constructor(val: Either<K, T>) {
    this.value = val;
  }
  getOrElse<P>(val: P): K|P {
    return this.value.isLeft ? this.value._left : val;
  }
  get(): K|never {
    if (this.value.isLeft) return this.value._left;
    throw new Error("No Such Element");
  }
  toOption(): Option<K> {
    return this.value.isLeft ? Some(this.value._left) : None;
  }
}