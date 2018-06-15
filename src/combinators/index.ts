export const I = (val: any) => val;
export const K = <T = any>(val: T) => (skip: any) => val;
export const W = (f: any) => (arg: any) => f(arg, arg);
// export const S = <P, T, K>(a: (f: (val: P) => T) => K) =>
//   (b: (val: P) => T) => (c: (val: P) => K) => a(c(b(c)));
