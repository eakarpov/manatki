# manatki

[![Build Status](https://travis-ci.org/eakarpov/manatki.svg?branch=master)](https://travis-ci.org/eakarpov/manatki)

Dependency-free library for functional programming in Typescript/Javascript

Status: in development (v0.0.0)

## Get started

To install the library you should use npm:

```
npm i --save manatki
```

Then you are able to import it in your project:

```typescript
import {Option, Some, None} from 'manatki';
```

## Features

1. Options

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

2. Either

```typescript
declare class Either<K, T> implements Validatable<K, T> {
    static Left<T>(val: T): Either<T, any>;
    static Right<T>(val: T): Either<any, T>;
    isLeft: boolean;
    isRight: boolean;
    private readonly _left;
    private readonly _right;
    constructor(left: K, right: T);
    left(): LProjection<K, T>;
    right(): RProjection<K, T>;
    getOrElse<P>(stopGap: P): T | P;
    swap(): Either<T, K>;
    joinLeft(): void;
    joinRight(): void;
    fold(): void;
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
