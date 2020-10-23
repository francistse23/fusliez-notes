import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { JssProvider, ThemeProvider } from "react-jss";

import ControlsContent from "../components/ControlsContent";
import { DEFAULT_THEME_DATA } from "utils/constants";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import React from "react";
import i18n from "../i18n";
import jssSetUp from "utils/jssSetUp";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import store from "store";

const component = renderHook(() => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <JssProvider registry={jssSetUp(DEFAULT_THEME_DATA)}>
        <ThemeProvider theme={DEFAULT_THEME_DATA}>
          <ControlsContent />
        </ThemeProvider>
      </JssProvider>
    </Provider>
  </I18nextProvider>
));

describe("ControlsContent component tests", () => {
  test("should render ControlsContent component", () => {
    component;
  });

  test('should render 3 buttons for "About," "Settings," and "Changelog"', () => {
    console.log(
      render(
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <JssProvider registry={jssSetUp(DEFAULT_THEME_DATA)}>
              <ThemeProvider theme={DEFAULT_THEME_DATA}>
                <ControlsContent />
              </ThemeProvider>
            </JssProvider>
          </Provider>
        </I18nextProvider>
      )
    );
  });
});
