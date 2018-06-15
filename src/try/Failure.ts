import {TryClass} from "./TryClass";

/**
 * @class Failure of function call in Try[T]
 */
export class Failure<T> extends TryClass<T> {
  /**
   * @property {Error}
   */
  protected value: Error;

  /**
   *
   * @param {Error} val
   */
  constructor(val: Error) {
    super(val, false);
  }
}
