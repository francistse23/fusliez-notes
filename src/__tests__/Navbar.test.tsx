import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { JssProvider, ThemeProvider } from "react-jss";
import { fireEvent, render, screen } from "@testing-library/react";

import { DEFAULT_THEME_DATA } from "constants/theme";
import { I18nextProvider } from "react-i18next";
import Navbar from "components/Navbar";
import { Provider } from "react-redux";
import React from "react";
import i18n from "../i18n";
import jssSetUp from "utils/jssSetUp";
import store from "store";

describe("Navbar component tests", () => {
  let testStore: typeof store;

  beforeEach(async () => {
    testStore = store;

    const onChangeActiveViewMockFn = jest.fn();
    const setIsDrawerOpenMockFn = jest.fn();

    await render(
      <React.Suspense fallback="loading...">
        <I18nextProvider i18n={i18n}>
          <JssProvider registry={jssSetUp()}>
            <ThemeProvider theme={DEFAULT_THEME_DATA}>
              <Provider store={testStore}>
                <Navbar
                  activeView=""
                  onChangeActiveView={onChangeActiveViewMockFn}
                  setIsDrawerOpen={setIsDrawerOpenMockFn}
                  orientation="landscape"
                />
              </Provider>
            </ThemeProvider>
          </JssProvider>
        </I18nextProvider>
      </React.Suspense>
    );
  });

  test("should render Navbar component", async () => {
    const component = await screen.getByTestId("navbar");
    expect(component).toBeInTheDocument();
  });

  test("Checks if the Navbar Item 'Notes' is clicked", async () => {
    const button = await screen.findByTestId("mobile-navbar-menu.notes-button");

    const mockFn = jest.fn(() => fireEvent.click(button));

    mockFn();

    expect(mockFn).toBeCalledTimes(1);
  });
});
