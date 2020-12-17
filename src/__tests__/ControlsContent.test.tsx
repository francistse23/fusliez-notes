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
import userEvent from "@testing-library/user-event";

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
    const element = await waitFor(() => screen.getByTestId("settings-button"));
    expect(element).toBeInTheDocument();
  });

  test("should open Settings modal when button is clicked", async () => {
    const button = await waitFor(() => screen.getByTestId("settings-button"));

    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const settingsModal = await waitFor(() =>
      screen.getByTestId("settings panel")
    );
    expect(settingsModal).toBeInTheDocument();
  });

  test("should open About modal when button is clicked", async () => {
    const button = await waitFor(() => screen.getByTestId("about-button"));

    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const aboutModal = await waitFor(() => screen.getByTestId("about-panel"));
    expect(aboutModal).toBeInTheDocument();
  });

  test("should open Changelog modal when button is clicked", async () => {
    const button = await waitFor(() => screen.getByTestId("changelog-button"));

    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const changelogModal = await waitFor(() =>
      screen.getByTestId("changelog-panel")
    );
    expect(changelogModal).toBeInTheDocument();
  });
});
