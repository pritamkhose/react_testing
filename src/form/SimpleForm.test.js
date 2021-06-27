import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SimpleForm from "./SimpleForm";
/**
 * Test What user would see
 */
test("renders the form correctly", () => {
  const { getByText, getByLabelText } = render(<SimpleForm />);
  const nameLabel = getByText(/Name:/i);
  const ageLabel = getByText(/Age:/i);
  expect(nameLabel).toBeInTheDocument();
  expect(ageLabel).toBeInTheDocument();
  const input = getByLabelText(/Age:/i);
  expect(input).toHaveAttribute("type", "number");
});

test("submit button should be disabled when Name is empty", () => {
  const { getByLabelText, getByRole } = render(<SimpleForm />);
  const input = getByLabelText(/Name:/i);
  fireEvent.change(input, { target: { value: "" } });
  const submitBtn = getByRole("button", { name: "Submit" });
  expect(submitBtn).toHaveAttribute("disabled");
});

test("submit button should be disabled when Name is empty", () => {
  const { getByLabelText, getByRole, debug } = render(<SimpleForm />);
  const input = getByLabelText(/Name:/i);
  fireEvent.change(input, { target: { value: "" } });
  const submitBtn = getByRole("button", { name: "Submit" });
  expect(submitBtn).toHaveAttribute("disabled");
  debug(submitBtn);
  fireEvent.change(input, { target: { value: "John Doe" } });
  debug(submitBtn);
  expect(submitBtn).not.toHaveAttribute("disabled");
});
