import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Provider } from "react-redux";
import Counter from "./Counter";
import store from "./store";

test("redux component functionality", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  
  fireEvent.click(getByText("+"));
  expect(getByText("Current Count: 1")).toBeInTheDocument();
  fireEvent.click(getByText("-"));
  fireEvent.click(getByText("-"));
  expect(getByText("Current Count: -1")).toBeInTheDocument();
  fireEvent.click(getByText("Reset"));
  expect(getByText("Current Count: 0")).toBeInTheDocument();
});
