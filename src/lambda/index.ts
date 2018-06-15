export function curry<T, K>(f: (...val: T[]) => K): any {
  return (...xs: T[]) => {
    if (xs.length === 0) {
      throw Error('Empty invoke');
    }
    if (xs.length >= f.length) {
      return f(...xs);
    }
    return curry(f.bind(null, ...xs));
  };
}
