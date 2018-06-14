export const I = (val: any) => val;
export const K = (val: any) => (skip: any) => val;
export const S = (a: any) => (b: any) => (c: any) => a(c(b(c)));