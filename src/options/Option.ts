import {IOption, None, Some} from "../../src";

export interface Option<T> extends IOption {}

export function Option<T>(value: Some<T>|None) {
  return { // TODO: new class extends IOption throws an error. Why??
    isEmpty: value.isEmpty,
    getOrElse(stopGap: any): any {
      return value.getOrElse(stopGap); 
    }
  };
}
