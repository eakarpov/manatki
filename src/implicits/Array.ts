import {lFold} from "../lambda/fold";
import {Either} from "../eithers";
import {Extension} from "./types";
import {Some} from "../options";

declare global {
  interface Array<T> extends Extension<Array<T>> {}
}

Array.prototype.toSome = function() {
  return Some<Array<any>>(this);
};
Array.prototype.asLeft = function() {
  return Either.Left<Array<any>>(this);
};
Array.prototype.asRight = function() {
  return Either.Right<Array<any>>(this);
};
Array.prototype.combine = function<T>(next: T[]): T[] {
  return this.concat(next);
};
Array.prototype.empty = () => [];
Array.prototype.isEmpty = function() {
  return this.length === 0;
};
Array.prototype.combineAll = function<T>(...args: T[]) {
  const f = (a: T, b: T) => this.combine.apply(a, [b]);
  const a = this;
  return lFold<T>(f)([a, ...args])(this.empty);
};