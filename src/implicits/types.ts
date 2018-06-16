import {Option} from "../options/Option";
import {Either} from "../eithers";
import {Monoid} from "../algrebra";
import {Group} from "../algrebra/Group";

export interface Optionized<T> {
  toSome(): Option<T>;
}

export interface Validated<T> {
  asLeft(): Either<T, any>;
  asRight(): Either<any, T>;
}

export type Extension<T> = Optionized<T> & Validated<T> & Monoid<T>;
export type GroupExtension<T> = Optionized<T> & Validated<T> & Group<T>;