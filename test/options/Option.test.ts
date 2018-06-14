import * as assert from 'assert';
import {Option} from '../../build/options/Option';
import {suite, test} from "mocha-typescript";
import '../../src/implicits';

@suite class OptionTest {
  @test getOrElseShouldReturn5() {
    const b = Option.Some<number>(5);
    assert.deepStrictEqual(b.getOrElse(5), 5);
  }

  @test getOrElseShouldReturnNothing() {
    const b = Option.None();
    assert.deepStrictEqual(b.getOrElse(5), 5);
  }

  @test getOrElsePrototypedNumberReturns5() {
    const a = (2).some();
    assert.deepStrictEqual(a.getOrElse(null), 2);
  }

  @test orElseReturnsSome5() {
    const a = Option.Some(5);
    const b = Option.Some(6);
    assert.deepStrictEqual(a.orElse(b), a);
  }

  @test orElseReturnsSome6() {
    const a = Option.None();
    const b = Option.Some(6);
    assert.deepStrictEqual(a.orElse(b), b);
  }

  @test patternMatсhingWhatIsIt() {
    const a = Option.Some<number>(5);
    assert.deepStrictEqual(a.match([{
        c: (opt: Option<number>) => opt.getOrElse(void 0) !== void 0,
        r: (opt: Option<number>) => opt.getOrElse(null)
      }, {
        c: (opt: Option<number>) => opt.getOrElse(void 0) === void 0,
        r: (opt: Option<number>) => opt.getOrElse(null)
      }
    ]), 5);
  }
}