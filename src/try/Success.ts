import {TryClass} from "./TryClass";

export class Success<T> extends TryClass<T> {
  protected value: T;
  constructor(val: T) {
    super(val, true);
  }
}