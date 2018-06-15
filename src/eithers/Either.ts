import {LProjection} from "./LProjection";
import {RProjection} from "./RProjection";
import {Success, Failure, Try} from "../try";

export interface Validatable<K, T> {
  isLeft: boolean;
  isRight: boolean;
  swap(): Either<T, K>;
  getOrElse<P>(stopGap: P): T|P;
  left(): LProjection<K, T>;
  right(): RProjection<K, T>;
  joinLeft<S = K, P = T>(): Either<S, P>;
  joinRight<S = K, P = T>(): Either<S, P>;
  fold<S>(f: (val: T) => S, g: (val: K) => S): S;
  exists(pred: (val: T) => boolean): boolean;
  forall(pred: (val: T) => boolean): boolean;
  toTry(): Try<T>;
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
  joinLeft<S = K, P = T>(): Either<S, P> {
    return (this.isLeft && this._left instanceof Either)
      ? this._left as Either<S, P>
      : this as any as Either<S, P>;
  }
  joinRight<S = K, P = T>(): Either<S, P> {
    return (this.isRight && this._right instanceof Either)
      ? this._right as Either<S, P>
      : this as any as Either<S, P>;
  }
  fold<S>(f: (val: T) => S, g: (val: K) => S): S {
    return this.isRight ? f(this._right) : g(this._left);
  }
  exists(pred: (val: T) => boolean): boolean {
    return this.isRight && pred(this._right);
  }

  forall(pred: (val: T) => boolean): boolean {
    return this.isLeft || pred(this._right);
  }
  toTry(): Try<T> {
    return this.isRight ? new Success(this._right) : new Failure<T>(new Error("Failed"));
  }
}
