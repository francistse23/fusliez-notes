import "regenerator-runtime/runtime";

import Footer from "components/Footer";
import React from "react";
import registerFaIcons from "../utils/registerFaIcons";
import { render } from "@testing-library/react";

describe("App", () => {
  test("renders Footer component", () => {
    registerFaIcons();
    render(<Footer />);
  });
});
