# manatki

[![Build status](https://img.shields.io/github/actions/workflow/status/eakarpov/manatki/ci.yml?branch=v1.x&label=CI&logo=github&style=flat-square)](https://github.com/eakarpov/manatki/actions/workflows/ci.yml)

Dependency-free library for functional programming in Typescript/Javascript

In functional programming, a monad is a structure that combines program fragments (functions) and wraps their return values in a type with additional computation. In addition to defining a wrapping monadic type, monads define two operators: one to wrap a value in the monad type, and another to compose together functions that output values of the monad type.

The library implements Scala approach of monad classes: `Option[T], Some[T], None`

## Get started

To install the library you should use npm:

```
npm i --save manatki
```

Then you are able to import it in your project:

```typescript
import {Option, Some, None} from 'manatki';
```

Optionally turn on implicit constructors of Option and Either

String and Number classes are Optionative and Validative, so they can be converted to Option<string>, Either<void, string> etc (see further).

To add this possibility you should import implicits from manatki:

```typescript
import 'manatki/implicits'; // All implicits
import 'manatki/implicits/String'; // implicits for strings
import 'manatki/implicits/Number'; // implicits for number
```

## Features

1. Option[T]

```typescript
const name: Option[String] = Some("name") // here we can get some optional value from outside
const upper = name
  .map(String.prototype.trim)
  .filter(e => e.length !== 0)
  .map(String.prototype.toUpperCase);
console.log(upper.getOrElse(""))
```

2. Either[K, T]

```typescript

```

3. Try[T]

```typescript
const a = (n: number) => (d: number) => {
  if (d === 0) throw new Error("division by zero");
  return n / d;
};

const status1 = Try<number>(() => a(5)(1)).fold<string>((n: number) => "Success", (e: Error) => e.message);
console.log(status1); // Success

const status2 = Try<number>(() => a(5)(0)).fold<string>((n: number) => "Success", (e: Error) => e.message);
console.log(status2); // division by zero
```

You can make your class Optionative by inheriting from Optionative<T>:

```typescript
class MyClass extends Optionative<MyClass> {
  // ...
}
const a = new MyClass();
a.some(); // returns Option<MyClass>
```

You can make your class Validative by inheriting from Validative<T>:

```typescript
class MyClass extends Validative<MyClass> {
  // ...
}
const a = new MyClass();
a.asLeft(); // returns Either<MyClass, void>
a.asRight(); // returns Either<void, MyClass>
```

5. Algebra

Monoid, Semigroup interfaces. Implicitly, String and Number are Monoidal in manatki.

## Functional programming

1. lFold

```typescript
lFold ((f: string) => (g: string) => f + g) ("") (["2","3","4","5","6"]); // 23456

lFold ((e: number) => (f: number) => e + f) (0) ([1,2,3]); // 6
```

2. rFold

```typescript
rFold ((f: string) => (g: string) => f + g)("") (["2","3","4","5","6"]); // "65432"
```

## License

MIT
