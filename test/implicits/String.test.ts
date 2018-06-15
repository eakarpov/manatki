import {suite, test} from "mocha-typescript";
import * as assert from "assert";
import "../../src/implicits";

@suite class StringTest {

  @test checkIsEmpty() {
    assert.deepStrictEqual("123".isEmpty(), false);
  }

  @test combineStrings() {
    assert.deepStrictEqual("123".combine("456"), "123456");
  }

  @test combineAllString() {
    assert.deepStrictEqual("1".combineAll("2", "3", "4", "5", "6"), "123456");
  }
}