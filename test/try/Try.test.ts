import * as assert from 'assert';
import {suite, test} from "mocha-typescript";
import {Try} from "../../build/try";

@suite class TryTest {

  @test toEither() {
    const a = Try<any>(() => { throw "asda" });
    assert.deepStrictEqual(a.toEither().getOrElse(0), 0);
  }

}