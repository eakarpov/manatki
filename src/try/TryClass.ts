import {Either, Left, Right} from "../eithers";
import {Try} from "./Try";

export class TryClass<T> implements Try<T> {
  isFailure: boolean;
  isSuccess: boolean;
  protected value: T|string|Error;
  toEither(): Either<string|Error, T> {
    return this.isSuccess
      ? Right<T>(this.value as T)
      : Left<string|Error>(this.value as string|Error);
  }
  constructor(val: T|string|Error, success: boolean) {
    this.isSuccess = success;
    this.isFailure = !success;
    this.value = val;
  }
}