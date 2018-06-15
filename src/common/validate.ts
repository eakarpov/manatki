import {Right, Left, Either} from "../";

export function validate<T extends {new(...args:any[]):{}}>(constructor: T) {
  console.log(constructor);
  return class extends constructor {
    asLeft(): Either<T, void> {
      return Left<T>(this as any as T);
    };
    asRight(): Either<void, T> {
      return Right<T>(this as any as T);
    };
  };
}
