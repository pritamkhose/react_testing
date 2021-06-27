import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./user";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeUser = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };
  jest
    .spyOn(global, "fetch")
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(fakeUser) })
    );
  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id="10" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.userId.toString());
  expect(container.querySelector("strong").textContent).toBe(fakeUser.id.toString());
  expect(container.textContent).toContain(fakeUser.title);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
