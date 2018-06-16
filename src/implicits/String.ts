import {Option} from "../options/Option";
import {lFold} from "../lambda/fold";
import {Either} from "../eithers";
import {Extension} from "./types";

declare global {
  interface String extends Extension<string> {}
}

String.prototype.toSome = function() {
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
String.prototype.empty = () => "";
String.prototype.isEmpty = function() {
  return this === this.empty();
};
String.prototype.combineAll = function (...args: string[]) {
  const f = (a: string, b: string) => this.combine.apply(a, [b]);
  const a = this;
  return lFold<string>(f)([a, ...args])(this.empty());
};