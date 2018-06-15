import {Option} from './options/Option';
import {Either} from './eithers';
import {Monoid} from "./algrebra";
import {lFold} from "./lambda/fold";

export interface Optionized<T> {
  some(): Option<T>;
}

export interface Validated<T> {
  asLeft(): Either<T, any>;
  asRight(): Either<any, T>;
}

type Extension<T> = Optionized<T> & Validated<T> & Monoid<T>;

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
  String.prototype.combine = function (next: string): string {
    return this + next;
  };
  String.prototype.empty = "";
  String.prototype.isEmpty = function() {
    return this === this.empty;
  };
  String.prototype.combineAll = function (...args: string[]) {
    const f = (a: string, b: string) => this.combine.apply(a, [b]);
    const a = this;
    return lFold<string>(f)([a, ...args])(this.empty);
  }
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
  Number.prototype.combine = function (next: Number) {
    return this + next;
  };
  Number.prototype.empty = 0;
  Number.prototype.isEmpty = function () {
    return this === 0;
  };
  Number.prototype.combineAll = function (...args: number[]) {
    const f = (a: number, b: number) => this.combine.apply(a, [b]);
    const a = this;
    return lFold<number>(f)([a, ...args])(this.empty);
  }
}

initNumberOptions();
initStringOptions();
