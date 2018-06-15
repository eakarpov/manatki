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

4. implicit constructors of Option and Either

String and Number classes are Optionative and Validative, so they can be converted to Option<string>, Either<void, string> etc (see further).

To add this possibility you should import implicits from manatki:

```typescript
import 'manatki/implicits'; // All implicits
import 'manatki/implicits/String'; // implicits for strings
import 'manatki/implicits/Number'; // implicits for number
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


## License

MIT
