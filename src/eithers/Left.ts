import {Either} from './Either';

export interface Left<T> {}

class LeftClass<T> extends Either implements Left<T> {

}

export function Left<T>(val: T): Left<T> {
  return new LeftClass<T>();
}