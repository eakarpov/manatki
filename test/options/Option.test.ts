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

  @test mapTest() {
    const a = Option.Some<number>(6);
    const inc = (a: number) => a + 1;
    assert.deepStrictEqual(a.map(inc).getOrElse(null), 7);
  }

  @test flatMapTest() {
    const a = Option.Some<number>(6);
    const inc = (a: number) => Option.Some(a + 1);
    assert.deepStrictEqual(a.flatMap(inc).getOrElse(null), 7);
  }

  @test coflatMapTest() {
    const a = Option.Some<number>(6);
    const inc = (a: Option<number>) => a.getOrElse(0) + 1;
    assert.deepStrictEqual(a.coflatMap(inc).getOrElse(null), 7);
  }

  @test foreachTest() {
    const a = Option.Some<number>(6);
    let b = 0;
    a.forEach((a: number) => { b =+ a});
    assert.deepStrictEqual(b, 6);
  }

  @test filterTest() {
    const a = Option.Some<number>(6);
    assert.deepStrictEqual(a.filter((a: number) => a === 2).getOrElse(0), 0);
  }

  @test falseFilterTest() {
    const a = Option.Some<number>(6);
    assert.deepStrictEqual(a.filter((a: number) => a === 6).getOrElse(0), 6);
  }

  @test flattenTest() {
    const a = Option.Some<number>(6);
    const b = Option.Some<Option<number>>(a);
    assert.deepStrictEqual(b.flatten().getOrElse(0), 6);
  }

  @test combineTest() {
    const a = Option.Some<number>(6);
    const b = Option.Some<number>(1);
    assert.deepStrictEqual(a.combine(b).getOrElse(0), 6);
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