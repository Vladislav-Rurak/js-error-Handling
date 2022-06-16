"use strict";

function pow(base, exponent) {
  if (typeof exponent !== "number") {
    throw new TypeError(
      "Введите число"
    );
  }
  if (!Number.isInteger(exponent)) {
    throw new RangeError(
      "Введите целое число"
    );
  }
  if (exponent < 0) {
    throw new RangeError(
      "Введите положительное число"
    );
  }
  if (exponent === 1) {
    return base;
  }
  return base * pow(base, exponent - 1);
}

try {
  console.log("pow() :>> ", pow(2, 4));
} catch (err) {
  console.log("err :>> ", err);
}
