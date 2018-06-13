import {Optionable} from "./Option";

export interface Some<T> extends Optionable<T> {
  isEmpty: boolean;
}

export function Some<T>(value: T) {
  return new class implements Optionable<T> {
    isEmpty: false;
    getOrElse(stopGap: any): any {
      return value;
    }
  }
}