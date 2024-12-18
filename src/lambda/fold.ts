export const lFold = <T, K>(f: (a: K) => (b: T) => K) => {
  const inner = (i: K) => {
    return (arr: T[]): K => {
      const newA: T[] = arr.slice();
      const temp:T = newA.shift();
      return arr.length === 0 ? i : inner (f (i) (temp)) (newA);
    }
  }
  return inner;
}

export const rFold = <T, K>(f: (a: T) => (b: K) => K) => {
  const inner = (i: K) => {
    return (arr: T[]): K => {
      const newA: T[] = arr.slice();
      const temp:T = newA.pop();
      return arr.length === 0 ? i : f (temp) (inner (i) (newA));
    }
  };
  return inner;
}
