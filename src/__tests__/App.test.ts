import "regenerator-runtime/runtime";

import { render, screen } from "@testing-library/react";

import App from "../components/App";
import React from "react";

describe("App", () => {
  test("renders App component", () => {
    const app = App();
    render(app);

    screen.debug();
  });
});
