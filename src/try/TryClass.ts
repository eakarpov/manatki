import {Either, Left, Right} from "../eithers";
import {Try} from "./Try";
import {Option} from "../options/Option";
import {None} from "../options/None";
import {Some} from "../options/Some";
import {Failure} from "../try";
import {Success} from "./Success";
import {I} from "../combinators/index";

export class TryClass<T> implements Try<T> {
  isFailure: boolean;
  isSuccess: boolean;
  protected value: T|Error;

  constructor(val: T|Error, success: boolean) {
    this.isSuccess = success;
    this.isFailure = !success;
    this.value = val;
  }

  toEither(): Either<Error, T> {
    return this.isSuccess
      ? Right<T>(this.value as T)
      : Left<Error>(this.value as Error);
  }

  toOption(): Option<T> {
    return this.isSuccess ? Some<T>(this.value as T) : None;
  }

  getOrElse<U>(stopGap: U): U|T {
    return this.isSuccess ? this.value as T : stopGap;
  }

  get(): T|never {
    if (this.isSuccess) return this.value as T;
    throw this.value as Error;
  }

  orElse<U>(fallback: Try<U>): Try<T|U> {
    return this.isSuccess ? this : fallback;
  }

  map<P>(func: (val: T) => P): Try<P|T> {
    return this.isSuccess ? Try(() => func(this.value as T)) : this;
  }

  flatMap<P>(func: (val: T) => Try<P>): Try<T|P> {
    return this.isSuccess ? func(this.value as T) : this;
  }

  forEach(func: (val: T) => void): void {
    this.isSuccess && func(this.value as T);
  }

  filter(pred: (val: T) => boolean): Try<T> {
    return (this.isSuccess && pred(this.value as T)) ? this : new Failure(this.value as Error);
  }

  transform<S>(f: (val: T) => Try<S>, g: (err: Error) => Try<S>): Try<S> {
    return this.isSuccess ? f(this.value as T) : g(this.value as Error);
  }

  recover<S>(f: (err: Error) => S): Try<S|T> {
    return this.isSuccess ? this : Try(() => f(this.value as Error));
  }

  recoverWith<S>(f: (err: Error) => Try<S>): Try<S|T> {
    return this.isSuccess ? this : f(this.value as Error);
  }

  fold<S>(f: (val: T) => S, g: (val: Error) => S): S {
    return this.isSuccess ? f(this.value as T) : g(this.value as Error);
  }

  failed(): Try<Error> {
    return this.isFailure
      ? new Success<Error>(this.value as Error)
      : new Failure(new Error("Unsupported operation"));
  }

  flatten<K>(): Try<T|K> {
    return this.isSuccess
      ? this.value instanceof Try
        ? this.flatMap(I) : this
      : this;
  }

  product<P>(next: Try<P>): Try<[T, P]> {
    return this.isFailure
      ? this as any as Try<[T, P]>
      : next.isFailure
        ? next as any as Try<[T, P]>
        : new Success<[T, P]>([this.value as T, next.get()]);
  }

  exists(pred: (val: T) => boolean): boolean {
    return this.isSuccess && pred(this.value as T);
  }

  forall(pred: (val: T) => boolean): boolean {
    return this.isFailure || pred(this.value as T);
  }
}
