import {Success} from "./Success";
import {Failure} from "./Failure";
import {Either} from "../eithers";

export interface Try<T> {
  toEither(): Either<string|Error, T>;
  isFailure: boolean;
  isSuccess: boolean;
}

export function Try<T>(f: () => T): Try<T> {
  try {
    const a: T = f();
    return new Success(a);
  } catch (e) {
    return new Failure(e);
  }
}

