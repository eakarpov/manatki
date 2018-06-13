import {Optionable, Option} from "./Option";

export interface Some<T> extends Optionable<T> {}

export function Some<T>(value: T): Some<T> {
  this.prototype = Option.prototype;
  this.isEmpty = false;
  this.getOrElse = function<V>(stopGap: V): T {
    return value;
  };
  return this;
}