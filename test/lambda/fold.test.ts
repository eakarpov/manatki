import {suite, test} from "mocha-typescript";
import * as assert from "assert";
import {lFold} from "../../src/lambda/fold";
import {rFold} from "../../src/lambda/fold";

@suite class FoldTest {
  @test lFoldEmpty() {
    assert.deepStrictEqual(lFold((e: number) => () => e + 1) (0) ([]), 0);
  }

  @test lFoldOneElem() {
    assert.deepStrictEqual(lFold((e: number) => (f: number) => e + f) (0) ([1]), 1);
  }

  @test lFoldSomeElem() {
    assert.deepStrictEqual(lFold((e: number) => (f: number) => e + f) (0) ([1,2,3]), 6);
  }

  @test lFoldSomeStrings() {
    assert.deepStrictEqual(
      lFold ( (f: string) => (g: string) => f + g) ("") (["2","3","4","5","6"]),
      "23456");
  }

  @test rFoldSomeStrings() {
    assert.deepStrictEqual(
        rFold ( (f: string) => (g: string) => f + g)("") (["2","3","4","5","6"]),
        "65432");
  }
}