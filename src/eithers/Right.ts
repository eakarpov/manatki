import {Either} from './Either';

export interface Right<T> {}

class RightClass<T> extends Either implements Right<T> {

}

export function Right<T>(val: T): Right<T> {
  return new RightClass<T>();
}