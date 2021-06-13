import { it, describe, expect, beforeEach } from "@jest/globals";
import { enrichReading } from "../src/ch6/6.10";
import { defaultOwner, setDefaultOwner } from "../src/ch6/defaultOwner copy";

describe("ch6", () => {
  it("check reading unchanged", () => {
    const baseReading = { customer: "ivan", quantity: 15, month: 5, year: 20 };
    const oracle = _.cloneDeep(baseReading);
    enrichReading(baseReading);
    expect(oracle).toEqual(baseReading);
  });
});
