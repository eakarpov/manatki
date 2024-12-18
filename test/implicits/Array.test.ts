import {suite, test} from "mocha-typescript";
import * as assert from "assert";
import "../../build/implicits/Array";
import {lFold} from "../../src/lambda/fold";

@suite class ArrayTest {

  @test checkIsEmpty() {
    assert.deepStrictEqual([4].isEmpty(), false);
  }

  @test combineArrays() {
    assert.deepStrictEqual([123].combine([456]), [123, 456]);
  }

  @test foldLArray() {
    assert.deepStrictEqual(lFold<number, number> ((a) => ( b) => a + b) (0) ([1,2,3,4,5]), 15);
  }

  @test combineAllArrays() {
    assert.deepStrictEqual([1].combineAll([2],[3],[4],[5],[6]), [1,2,3,4,5,6]);
  }
}