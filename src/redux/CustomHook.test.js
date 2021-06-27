import React from "react";
import { render, act } from "@testing-library/react";
import { useMultiplier } from "./CustomHook";

test("Custom hook should be able to multiply properly", () => {
  let result = null;
  function Test() {
    result = useMultiplier({ initialNum: 1 });
    return null;
  }
  render(<Test />);
  expect(result.num).toBe(1);
  act(() => result.multiply(4));
  expect(result.num).toBe(4);
});
