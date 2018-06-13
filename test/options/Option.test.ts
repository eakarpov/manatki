import * as assert from 'assert';
import {Option} from '../../src/options/Option';
import {Some} from '../../src/options/Some';
import '../../src/implicits';

describe("Option", () => {
  describe("#getOrElse()", () => {
    it("shoud return 5", () => {
      // TODO: why this test fails?
      const a = Some<number>(5);
      const b = Option<number>(a);
      assert.equal(a.getOrElse(5), 5);
    });

    it("Prototyped number returns 5", () => {
      const a = (2 as any).some();
      assert.equal(a.getOrElse(null), 2);
    });
  });
});