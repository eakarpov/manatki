import {None, Option, Some} from "../options";
import {Either} from "./Either";
import {Projection} from "./LProjection";

export class RProjection<K, T> implements Projection<T> {
  private readonly value: Either<K, T>;
  constructor(val: Either<K, T>) {
    this.value = val;
  }
  getOrElse<P>(val: P): T|P {
    return this.value.getOrElse(val);
  }
  get(): T|never {
    if (this.value.isRight) return this.getOrElse(void 0);
    throw new Error("No Such Element");
  }
  toOption(): Option<T> {
    return this.value.isRight ? Some(this.getOrElse(void 0)) : None;
  }
}