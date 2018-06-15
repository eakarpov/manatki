import {Optionable, Option} from "./Option";

export interface None extends Optionable<any>{
  get: () => never;
}

/**
 * @class NoneClass
 * None generator
 */
class NoneClass extends Option<any> implements None {
  /**
   *
   * @returns {never}
   */
  get(): never {
    throw new Error("Cannot get value from NoneType");
  }
}

export const None = new NoneClass();
