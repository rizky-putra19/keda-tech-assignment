export function totalEvenInsideObject(obj) {
  let sum = 0;
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "number") {
      if (value % 2 === 0) {
        sum += value;
      }
    }
    if (typeof value === "object") {
      sum += totalEvenInsideObject(value);
    }
  }
  return sum;
}
