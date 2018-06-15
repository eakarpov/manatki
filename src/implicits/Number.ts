import {Option} from "../options/Option";
import {lFold} from "../lambda/fold";
import {Either} from "../eithers";
import {Extension} from "./types";

declare global {
  interface Number extends Extension<number> {}
}

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