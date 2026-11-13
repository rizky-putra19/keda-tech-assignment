import { describe, it, expect } from "vitest";
import { totalEvenInsideObject } from "./answerNumberThree";

describe("totalEvenInsideObject unit testing", () => {
  it("should be the result 6", () => {
    const obj = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    };
    expect(totalEvenInsideObject(obj)).toBe(6);
  });

  it("should be the result 12", () => {
    const obj = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    };
    expect(totalEvenInsideObject(obj)).toBe(12);
  });
});
