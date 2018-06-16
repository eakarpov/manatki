import {Monoid} from "./Monoid";

export abstract class Group<T> extends Monoid<T> {
  abstract inverse(x: T): T;
}