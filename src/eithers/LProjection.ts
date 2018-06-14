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
    return this.value.swap().getOrElse(val);
  }
  get(): K|never {
    if (this.value.isLeft) return this.value.swap().getOrElse(void 0);
    throw new Error("No Such Element");
  }
  toOption(): Option<K> {
    return this.value.isLeft ? Some(this.value.swap().getOrElse(void 0)) : None;
  }
}