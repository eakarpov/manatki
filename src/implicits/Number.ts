import {Option} from "../options/Option";
import {lFold} from "../lambda/fold";
import {Either} from "../eithers";
import {GroupExtension} from "./types";

declare global {
  interface Number extends GroupExtension<number> {}
}

Number.prototype.toSome = function() {
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
Number.prototype.empty = () => 0;
Number.prototype.isEmpty = function () {
  return this === this.empty();
};
Number.prototype.combineAll = function (...args: number[]) {
  const f = (a: number, b: number) => this.combine.apply(a, [b]);
  const a = this;
  return lFold<number>(f)([a, ...args])(this.empty());
};
Number.prototype.inverse = function () {
  return this.empty() - this;
};