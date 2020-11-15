import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { JssProvider, ThemeProvider } from "react-jss";
import { render, screen, waitFor } from "@testing-library/react";

import ControlsContent from "../components/ControlsContent";
import { DEFAULT_THEME_DATA } from "constants/theme";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import React from "react";
import i18n from "../i18n";
import jssSetUp from "utils/jssSetUp";
import registerFaIcons from "../utils/registerFaIcons";
import store from "store";

describe("ControlsContent component tests", () => {
  beforeEach(async () => {
    registerFaIcons();
    await render(
      <React.Suspense fallback="loading...">
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <JssProvider registry={jssSetUp()}>
              <ThemeProvider theme={DEFAULT_THEME_DATA}>
                <ControlsContent />
              </ThemeProvider>
            </JssProvider>
          </Provider>
        </I18nextProvider>
      </React.Suspense>
    );
  });

  test("should render ControlsContent component", async () => {
    const component = await screen.getByTestId("controls");
    expect(component).toBeInTheDocument();
  });

  test('should render button for "Settings"', async () => {
    await waitFor(() => {
      expect(screen.getByTestId("settings button")).toBeInTheDocument();
    });
  });
});
