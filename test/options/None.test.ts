import * as assert from 'assert';
import {None} from '../../build/options/None';
import {suite, test} from "mocha-typescript";

@suite class NoneTest {
  // #getOrElse
  @test getOrElseShouldReturnNothing() {
    const a = None;
    assert.deepStrictEqual(a.getOrElse(5), 5);
  }

  @test getThrowsError() {
    assert.throws(None.get);
  }
}