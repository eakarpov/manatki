import {Optionable, Option} from "./Option";

export interface None extends Optionable<any>{
  get: () => void;
}

class NoneClass extends Option<any> implements None {
  get() {
    throw new Error("Cannot get value from NoneType");
  }
}

export const None = new NoneClass();
