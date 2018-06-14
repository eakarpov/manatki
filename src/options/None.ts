import {Optionable, Option} from "./Option";

export interface None extends Optionable<any>{
  get: () => never;
}

class NoneClass extends Option<any> implements None {
  get(): never {
    throw new Error("Cannot get value from NoneType");
  }
}

export const None = new NoneClass();
