import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { screen, render } from "@testing-library/react";

import Todo from "./Todo";

test("renders correctly", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Todo id="1" title="My todo" />
    </Router>
  );
  const todoLink = screen.getByText(/My todo/i);
  expect(todoLink).toBeInTheDocument();
  expect(todoLink).toHaveAttribute("href", "/todo/1");
});
