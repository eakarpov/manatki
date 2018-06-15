import {Validatable} from '../';
import {RightClass} from "./RightClass";

export interface Right<T> extends Validatable<any, T> {}

export function Right<T>(val: T): Right<T> {
  return new RightClass<T>(val);
}
