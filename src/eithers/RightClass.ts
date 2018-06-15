import {Either} from "./Either";
import {Right} from "./Right";

export class RightClass<T> extends Either<any, T> implements Right<T> {
  constructor(val: T) {
    super(void 0, val);
  }
}
