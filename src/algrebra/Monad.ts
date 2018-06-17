export abstract class Monad<T> {
  abstract bind<U>(f: (val: T) => Monad<U>): Monad<U>;

  static unit<T>(x: T): Monad<T> {
    return void 0;
  }
}
