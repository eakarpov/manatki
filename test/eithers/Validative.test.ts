import {suite, test} from "mocha-typescript";
import * as assert from "assert";
import {Validative} from "../../src/common/Validative";

class A extends Validative<A> {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
}

@suite class ValidativeTest {
  @test asLeft() {
    const a = new A("some");
    const b = new A("aaa");
    assert.deepStrictEqual(a.asRight().getOrElse(b).name, "some");
  }
}
