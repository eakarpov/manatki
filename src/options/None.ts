import {Optionable, Option} from "./Option";

export interface None extends Optionable<any>{}

export function None(): None {
  this.prototype = Option.prototype;
  this.isEmpty = true;
  this.getOrElse = function<V>(stopGap: V) {
    return stopGap;
  };
  return this;
}


