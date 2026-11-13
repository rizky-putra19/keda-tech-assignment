import { describe, it, expect } from "vitest";
import { mappingBigToLow } from "./answerNumberOne";

describe("mappingBigToLow unit testing", () => {
  it("should the result mapping from big num to low num", () => {
    const input = [1, 2, 4, 3, 5, 3, 2, 1];
    expect(mappingBigToLow(input)).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
  });
});
