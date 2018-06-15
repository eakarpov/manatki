import {Option} from './options/Option';
import {Either} from './eithers';

export interface Optionized<T> {
  some(): Option<T>;
}

export interface Validated<T> {
  asLeft(): Either<T, any>;
  asRight(): Either<any, T>;
}

type Extension<T> = Optionized<T> & Validated<T>;

declare global {
  interface String extends Extension<string> {}
  interface Number extends Extension<number> {}
}

function initStringOptions() {
  String.prototype.some = function() {
    return Option.Some<string>(this);
  };
  String.prototype.asLeft = function() {
    return Either.Left<string>(this);
  };
  String.prototype.asRight = function() {
    return Either.Right<string>(this);
  };
}

function initNumberOptions() {
  Number.prototype.some = function() {
    return Option.Some<number>(this);
  };
  Number.prototype.asLeft = function() {
    return Either.Left<number>(this);
  };
  Number.prototype.asRight = function() {
    return Either.Right<number>(this);
  };
}

initNumberOptions();
initStringOptions();
