import {suite, test} from "mocha-typescript";
import * as assert from "assert";
import {EitherM} from "../../build/eithers";
import "../../build/implicits/String";

@suite class MonoidTest {
  @test EitherStringMonoidEmpty() {
    const a = "asd";
    const b = new EitherM(void 0, a);
    assert.deepStrictEqual(b.empty().getOrElse("take it"), "");
  }

  @test EitherNumberMonoidEmpty() {
    const a = 10;
    const b = new EitherM(void 0, a);
    assert.deepStrictEqual(b.empty().getOrElse(5), 0);
  }
}
