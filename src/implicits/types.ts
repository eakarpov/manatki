import {Option} from "../options/Option";
import {Either} from "../eithers";
import {Monoid} from "../algrebra";

export interface Optionized<T> {
  some(): Option<T>;
}

export interface Validated<T> {
  asLeft(): Either<T, any>;
  asRight(): Either<any, T>;
}

export type Extension<T> = Optionized<T> & Validated<T> & Monoid<T>;
