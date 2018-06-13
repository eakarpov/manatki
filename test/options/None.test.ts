import * as assert from 'assert';
import {None} from '../../src/options/None';
import {suite, test} from "mocha-typescript";

@suite class Nonetest {
  // #getOrElse
  @test getOrElseShouldReturnNothing() {
    const a = None;
    assert.deepStrictEqual(a.getOrElse(5), 5);
  }
}