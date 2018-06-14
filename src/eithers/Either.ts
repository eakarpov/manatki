export interface Validatable<K, T> {

}

export class Either<K, T> implements Validatable<K, T> {
  static Left<T>(val: T) {
    return new Either<T, any>(val, void 0);
  }
  static Right<T>(val: T) {
    return new Either<any, T>(void 0, val);
  }
  left: K;
  right: T;
  constructor(left: K, right: T) {
    this.left = left;
    this.right = right;
  }
}