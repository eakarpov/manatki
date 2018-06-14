export interface Validatable<K, T> {
  isLeft: boolean;
  isRight: boolean;
  swap(): void;
}

export class Either<K, T> implements Validatable<K, T> {
  static Left<T>(val: T) {
    return new Either<T, any>(val, void 0);
  }
  static Right<T>(val: T) {
    return new Either<any, T>(void 0, val);
  }
  isLeft: boolean;
  isRight: boolean;
  left: K;
  right: T;
  constructor(left: K, right: T) {
    this.left = left;
    this.right = right;
    if (this.left !== void 0) this.isLeft = true;
    if (this.right !== void 0) this.isRight = true;
  }
  getOrElse<P>(stopGap: P): T|P {
    return this.isRight ? this.right : stopGap;
  }
  swap(): Either<T, K> {
    return new Either(this.right, this.left);
  }
  fold() {

  }
}