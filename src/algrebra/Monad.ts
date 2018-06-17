export abstract class Monad<T> {
  abstract bind<U>(f: (val: T) => Monad<U>): Monad<U>;

  abstract unit<T>(x: T): Monad<T>;
}
