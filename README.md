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
3. Try[T]
4. implicit constructors of Option and Either

String and Number classes are Optionative and Validative, so they can be converted to Option<string>, Either<void, string> etc (see further).

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

## License

MIT
