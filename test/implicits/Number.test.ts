import {suite, test} from "mocha-typescript";
import * as assert from "assert";
import "../../src/implicits";

@suite class StringTest {
  @test getOrElsePrototypedNumberReturns5() {
    const a = (2).some();
    assert.deepStrictEqual(a.getOrElse(null), 2);
  }

  @test checkIsEmpty() {
    assert.deepStrictEqual((4).isEmpty(), false);
  }

  @test combineStrings() {
    assert.deepStrictEqual((123).combine(456), 579);
  }

  @test combineAllString() {
    assert.deepStrictEqual((1).combineAll(2,3,4,5,6), 21);
  }
}