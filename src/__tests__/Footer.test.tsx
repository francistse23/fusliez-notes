import "regenerator-runtime/runtime";

import Footer from "components/Footer";
import React from "react";
import registerFaIcons from "../utils/registerFaIcons";
import { render } from "@testing-library/react";

describe("Footer component tests", () => {
  test("renders Footer component", () => {
    registerFaIcons();
    render(<Footer />);
  });
});
