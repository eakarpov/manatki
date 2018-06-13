import {Optionable} from "./Option";

export interface None extends Optionable<any> {}

export const None = {
    isEmpty: true,
    getOrElse<V>(stopGap: V) {
      return stopGap;
    }
} as None;
