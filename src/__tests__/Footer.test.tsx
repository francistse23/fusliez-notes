import "regenerator-runtime/runtime";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import Footer from "components/Footer";
import React from "react";
import registerFaIcons from "../utils/registerFaIcons";
import { render } from "@testing-library/react";
import store from "store";

describe("Footer component tests", () => {
  test("renders Footer component", () => {
    registerFaIcons();
    render(
      <DefaultComponentWrapper testStore={store}>
        <Footer />
      </DefaultComponentWrapper>
    );
  });
});
