import {Success} from "./Success";
import {Failure} from "./Failure";
import {Either} from "../eithers";
import {Option} from "../options/Option";

export interface Try<T> {
  toEither(): Either<Error, T>;
  toOption(): Option<T>;

  getOrElse<U>(stopGap: U): T|U;
  get(): T|never;
  orElse<U>(fallback: Try<U>): Try<T|U>;

  isFailure: boolean;
  isSuccess: boolean;

  map<P>(func: (val: T) => P): Try<P|T>;
  flatMap<P>(func: (val: T) => Try<P>): Try<T|P>;
  forEach(func: (val: T) => void): void;
  filter(pred: (val: T) => boolean): Try<T>;
  fold<S>(f: (val: T) => S, g: (val: Error) => S): S;
  flatten<K>(): Try<T|K>;

  transform<S>(f: (val: T) => Try<S>, g: (err: Error) => Try<S>): Try<S>
  recover<S>(f: (err: Error) => S): Try<S|T>;
  recoverWith<S>(f: (err: Error) => Try<S>): Try<S|T>;
  failed(): Try<Error>;
  product<P>(next: Try<P>): Try<[T, P]>;

  exists(pred: (val: T) => boolean): boolean;
  forall(pred: (val: T) => boolean): boolean;
}

export function Try<T>(f: () => T): Try<T> {
  try {
    const a: T = f();
    return new Success(a);
  } catch (e) {
    return new Failure(e);
  }
}

