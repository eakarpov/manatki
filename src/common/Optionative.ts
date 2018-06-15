import {Some, Option} from "../";

export function optionate<T extends {new(...args:any[]):{}}>(constructor: T) {
  constructor.prototype.some = function(): Option<T> {
    return Some<T>(this);
  };
  return constructor;
}

export class Optionative<T> {
  some = function(): Option<T> {
    return Some<T>(this);
  };
}
