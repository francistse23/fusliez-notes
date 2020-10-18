import "regenerator-runtime/runtime";

import { render, screen } from "@testing-library/react";

import App from "../components/App";
import { I18nextProvider } from "react-i18next";
import React from "react";
import i18n from "../i18n";

describe("App", () => {
  test("renders App component", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );

    // screen.debug();
  });
});
