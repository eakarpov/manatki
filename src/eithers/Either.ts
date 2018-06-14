import {LProjection} from "./LProjection";
import {RProjection} from "./RProjection";

export interface Validatable<K, T> {
  isLeft: boolean;
  isRight: boolean;
  swap(): Either<T, K>;
  getOrElse<P>(stopGap: P): T|P;
  left(): LProjection<K, T>;
  right(): RProjection<K, T>;
  joinLeft(): void;
  joinRight(): void;
  fold(): void;
}

export class Either<K, T> implements Validatable<K, T> {
  static Left<T>(val: T) {
    return new Either<T, any>(val, void 0);
  }
  static Right<T>(val: T) {
    return new Either<any, T>(void 0, val);
  }

  public isLeft: boolean;
  public isRight: boolean;
  private readonly _left?: K;
  private readonly _right?: T;

  constructor(left?: K, right?: T) {
    this._left = left;
    this._right = right;
    this.isLeft = left !== void 0;
    this.isRight = right !== void 0;
  }

  public left(): LProjection<K, T> {
    return new LProjection(this);
  }
  public right(): RProjection<K, T> {
    return new RProjection(this);
  }
  public getOrElse<P>(stopGap: P): T|P {
    return this.isRight ? this._right : stopGap;
  }
  public swap(): Either<T, K> {
    return new Either(this._right, this._left);
  }
  joinLeft() {
    throw new Error("not implemented");
  }
  joinRight() {
    throw new Error("not implemented");
  }
  fold() {
    throw new Error("not implemented");
  }
}