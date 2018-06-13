export interface Match<T, O> {
  (value?: T): O
}

export interface Matching<I, O> {
  c: (value: I) => boolean;
  r: Match<I, O>;
}

export type Matcher<I, O> = Matching<I, O>[]

export function match<I, O>(subject: I, object: Matcher<I, O>): O {
  let result;
  object.forEach(elem => {
    if (elem.c(subject)) {
      result = elem.r(subject);
    }
  });
  if (result === void 0) throw new Error("all patterns should be defined");
  return result;
}