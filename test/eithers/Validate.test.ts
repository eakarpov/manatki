import {suite, test} from "mocha-typescript";
import * as assert from "assert";
import {validate} from "../../src/common/validate";

@validate
class A {
  constructor(name: string) {}
  some() {

  }
}

@suite class ValidatableTest {
  // @test asLeft() {
  //   const a = new A("some");
  //   console.log(a);
  //   // assert.deepStrictEqual(a.asRight().getOrElse("aaa"), "some");
  // }
}
