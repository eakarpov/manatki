import * as assert from 'assert';
import {Option} from '../../src/options/Option';
import '../../src/implicits';
import {suite, test} from "mocha-typescript";
import '../../src/implicits';

@suite class OptionTest {
  @test getOrElseShouldReturn5() {
    const b = Option.Some<number>(5);
    assert.deepStrictEqual(b.getOrElse<number>(5), 5);
  }

  @test getOrElseShouldReturnNothing() {
    const b = Option.None();
    assert.deepStrictEqual(b.getOrElse<number>(5), 5);
  }

  @test getOrElsePrototypedNumberReturns5() {
    const a = (2).some();
    assert.deepStrictEqual(a.getOrElse<object>(null), 2);
  }
}