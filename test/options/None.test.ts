import * as assert from 'assert';
import {None} from '../../src/options/None';

describe("None", () => {
  describe("#getOrElse()", () => {
    it("shoud return nothing", () => {
      const a = None();
      assert.equal(a.getOrElse(5), 5);
    });
  });
});