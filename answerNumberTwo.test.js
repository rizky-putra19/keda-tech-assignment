import { describe, it, expect } from "vitest";
import { maxSubArray } from "./answerNumberTwo";

describe("maxSubArray unit testing", () => {
  it("should have final result 39 for input ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)", () => {
    const nums = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    const k = 4;

    expect(maxSubArray(nums, k)).toBe(39);
  });

  it("should have final result 700 for input ([100, 200, 300, 400], 2)", () => {
    const nums = [100, 200, 300, 400];
    const k = 2;

    expect(maxSubArray(nums, k)).toBe(700);
  });

  it("should have final result 5 for input ([-3, 4, 0, -2, 6, -1], 2)", () => {
    const nums = [-3, 4, 0, -2, 6, -1];
    const k = 2;

    expect(maxSubArray(nums, k)).toBe(5);
  });
});
