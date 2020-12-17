import "regenerator-runtime/runtime";

import { JssProvider, ThemeProvider } from "react-jss";
import { render, screen } from "@testing-library/react";

import { DEFAULT_THEME_DATA } from "constants/theme";
import { I18nextProvider } from "react-i18next";
import MobileLayout from "components/Layout/MobileLayout";
import { Provider } from "react-redux";
import React from "react";
import i18n from "../i18n";
import jssSetUp from "utils/jssSetUp";
import registerFaIcons from "../utils/registerFaIcons";
import store from "store";

// import { renderHook } from "@testing-library/react-hooks";

// import { setIsMobile } from "store/slices/DeviceSlice";

/* eslint-disable react/display-name */
describe("MobileLayout component tests", () => {
  let testStore: typeof store;

  beforeEach(async () => {
    testStore = store;
    registerFaIcons();

    await render(
      <React.Suspense fallback="loading...">
        <I18nextProvider i18n={i18n}>
          <JssProvider registry={jssSetUp()}>
            <ThemeProvider theme={DEFAULT_THEME_DATA}>
              <Provider store={testStore}>
                <MobileLayout />
              </Provider>
            </ThemeProvider>
          </JssProvider>
        </I18nextProvider>
      </React.Suspense>
    );
  });

  test("renders MobileLayout component", async () => {
    const mobileContent = await screen.findByTestId("mobile-content");
    expect(mobileContent).toBeInTheDocument();
  });

  test("notes navbar button", async () => {
    const notesNavbarButton = await screen.findByTestId(
      "mobile-navbar-menu.notes-button"
    );

    screen.debug();

    expect(notesNavbarButton).toBeInTheDocument();
  });
});
