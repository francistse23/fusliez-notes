import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { JssProvider, ThemeProvider } from "react-jss";
import { fireEvent, render, screen } from "@testing-library/react";

import { DEFAULT_THEME_DATA } from "constants/theme";
import DefaultComponentWrapper from "./DefaultComponentWrapper";
import { I18nextProvider } from "react-i18next";
import MapsPanel from "components/MapsPanel";
import { Provider } from "react-redux";
import React from "react";
import i18n from "../i18n";
import jssSetUp from "utils/jssSetUp";
import { setCurrentMap } from "store/slices/MapsSlice";
import store from "store";

describe("MapsPanel component tests", () => {
  let testStore: typeof store;

  beforeEach(async () => {
    testStore = store;

    await render(
      <DefaultComponentWrapper testStore={testStore}>
        <MapsPanel />
      </DefaultComponentWrapper>
    );
  });

  test("should render MapsPanel component", async () => {
    const component = await screen.getByTestId("maps-panel");
    expect(component).toBeInTheDocument();
  });

  test("should render MapsPanel component with The Skeld map BY DEFAULT", async () => {
    const map = await screen.getByTestId("the-skeld-map");
    expect(map).toBeInTheDocument();
  });

  test("should render MapsPanel component with Mira HQ map", async () => {
    testStore = store;

    const button = await screen.getByTestId("mira-hq-button");
    fireEvent.click(button);
    await testStore.dispatch(setCurrentMap("MiraHq"));

    const map = await screen.getByTestId("mira-hq-map");
    expect(map).toBeInTheDocument();
  });

  test("should render MapsPanel component with Polus map", async () => {
    testStore = store;

    const button = await screen.getByTestId("polus-button");
    fireEvent.click(button);
    await testStore.dispatch(setCurrentMap("Polus"));

    const map = await screen.getByTestId("polus-map");
    expect(map).toBeInTheDocument();
  });
});
