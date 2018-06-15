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

## License

MIT
