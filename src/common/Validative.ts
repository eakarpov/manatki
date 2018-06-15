import {Right, Left, Either} from "../";

// export function validate<T extends {new(...args:any[]):{}}>(target: T) {
  // // save a reference to the original constructor
  // const original = target;
  //
  // // a utility function to generate instances of a class
  // function construct<K extends {new(...args:any[]):{}}>(constructor: K, args: any[]) {
  //   const c: any = function () {
  //     return constructor.apply(this, args);
  //   };
  //   c.prototype = constructor.prototype;
  //   return new c();
  // }
  //
  // // the new constructor behaviour
  // const f: any = function (...args: any[]) {
  //   console.log("New: " + original.name);
  //   return construct(original, args);
  // };
  //
  // // copy prototype so intanceof operator still works
  // f.prototype = original.prototype;
  //
  // f.prototype.asLeft = function (): Either<T, void> {
  //   return Left<T>(this);
  // };
  //
  // f.prototype.asRight = function(): Either<void, T> {
  //   return Right<T>(this);
  // };
  // // return new constructor (will override original)
  // return f;
  // return class extends target {
  //   asLeft(): Either<T, void> {
  //     return Left<T>(this as any as T);
  //   };
  //   asRight(): Either<void, T> {
  //     return Right<T>(this as any as T);
  //   };
  // }
// }

export class Validative<T> {
  asLeft(): Either<T, void> {
    return Left<T>(this as any as T);
  };
  asRight(): Either<void, T> {
    return Right<T>(this as any as T);
  };
}
