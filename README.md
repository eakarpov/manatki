# lc

Lambda Calculus for Typescript/Javascript

Status: in development (v0.0.0)

## Features

1. Option

```typescript
declare class Option<T> implements Optionable<T> {
    static Some<T>(value: T): Option<T>;
    static None(): Option<{}>;
    value?: T;
    isEmpty: boolean;
    isDefined: boolean;
    constructor(value?: T);
    getOrElse<V>(stopGap: V): T | V;
    orElse<V>(fallback: Option<V>): Option<T | V>;
    map<P>(func: (val: T) => P): Option<P | T>;
    flatMap<P>(func: (val: T) => Option<P>): Option<T | P>;
    coflatMap<P>(func: (val: Option<T>) => P): Option<T | P>;
    forEach(func: (val: T) => void): void;
    filter(pred: (val: T) => boolean): Option<T>;
    flatten<K>(): Option<T | K>;
    combine<P>(that: Option<P>): Option<T | P>;
    match<P>(object: Matcher<Option<T>, P>): any;
}
```

## Interfaces

```typescript
interface Traversable<T> {
    map<P>(func: (val: T) => P): Option<P | T>;
    flatMap<P>(func: (val: T) => Option<P>): Option<T | P>;
    coflatMap<P>(func: (val: Option<T>) => P): Option<T | P>;
    combine<P>(that: Option<P>): Option<T | P>;
    forEach(func: (val: T) => void): void;
    filter(pred: (val: T) => boolean): Option<T>;
    flatten(): Option<T>;
}
interface Optionable<T> extends Traversable<T> {
    isEmpty: boolean;
    isDefined: boolean;
    getOrElse<V>(stopGap: V): T | V;
    orElse<V>(fallback: Option<V>): Option<T | V>;
    match<P>(object: Matcher<Option<T>, P>): any;
    value?: T;
}
```

## License

MIT
