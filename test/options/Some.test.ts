import * as assert from 'assert';
import {Some} from '../../src/options/Some';
import {suite, test} from "mocha-typescript";

@suite class SomeTest {
  // #getOrElse()
  @test getOrElseShouldReturn5() {
    const a = Some<number>(5);
    assert.deepStrictEqual(a.getOrElse(null), 5);
  }
}
