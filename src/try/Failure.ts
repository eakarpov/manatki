import {TryClass} from "./TryClass";

export class Failure<T> extends TryClass<T> {
  protected value: string|Error;
  constructor(val: string|Error) {
    super(val, false);
  }
}