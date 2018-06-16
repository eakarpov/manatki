import {suite, test} from "mocha-typescript";
import * as assert from "assert";
import {EitherM} from "../../build/eithers";
import "../../build/implicits/String";

@suite class MonoidTest {
  @test EitherStringMonoidEmpty() {
    const a = "asd";
    const b = new EitherM(a);
    assert.deepStrictEqual(b.empty, "");
  }
}
