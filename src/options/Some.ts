import {IOption} from './IOption';

export interface Some<T> extends IOption {
}

export function Some<T>(value: T) {
  return new class implements IOption {
    isEmpty: false;
    getOrElse(stopGap: any): any {
      return value;
    }
  }
}