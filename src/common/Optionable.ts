import {Some, Option} from "../";

export function Optionate<T extends {new(...args:any[]):{}}>(constructor: T) {
  constructor.prototype.some = function(): Option<T> {
    return Some<T>(this);
  };
  return constructor;
}
