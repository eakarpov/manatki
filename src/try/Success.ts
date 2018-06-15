import {TryClass} from "./TryClass";

/**
 * @class Success for function call in Try[T]
 */
export class Success<T> extends TryClass<T> {
  /**
   * @property {T}
   */
  protected value: T;

  /**
   *
   * @param {T} val
   */
  constructor(val: T) {
    super(val, true);
  }
}
