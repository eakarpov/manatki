export abstract class Semigroup<T> {
  abstract combine(x: T): T;
}