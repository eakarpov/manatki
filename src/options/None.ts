import {IOption} from './IOption';

export interface None extends IOption {
}

export function None<T>() {
  return new class implements IOption {
    isEmpty: true;
    getOrElse(stopGap: any) {
      return stopGap;
    }
  }
}
