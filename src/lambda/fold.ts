export function lFold<T>(f: (a: T, b: T) => T) {
  return function inner(a: T[]) {
    return function (i: T): T {
      const newA = a.slice();
      const temp: T = newA.shift();
      return a.length === 0 ?  i : inner(newA)(f(i, temp));
    }
  }
}

export function rFold<T>(f: (a: T, b: T) => T) {
  return function (a: T[]) {
    return function (i: T): T {
      const temp = a.pop();
      return a.length === 0 ?  i : lFold(f)(a)(f(i, temp));
    }
  }
}