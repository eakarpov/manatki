import * as assert from 'assert';
import {Some} from '../../src/options/Some';

describe("Some", () => {
  describe("#getOrElse()", () => {
    it("shoud return 5", () => {
      const a = Some<number>(5);
      assert.equal(a.getOrElse(null), 5);
    });
  });
});