import "regenerator-runtime/runtime";

import { JssProvider, ThemeProvider } from "react-jss";
import { act, fireEvent, render, screen } from "@testing-library/react";

import { DEFAULT_THEME_DATA } from "constants/theme";
import { I18nextProvider } from "react-i18next";
import Layout from "components/Layout";
import { Provider } from "react-redux";
import React from "react";
import i18n from "../i18n";
import jssSetUp from "utils/jssSetUp";
import registerFaIcons from "../utils/registerFaIcons";
import { setIsMobile } from "store/slices/DeviceSlice";
import store from "store";

describe("Layout component tests", () => {
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
                <Layout />
              </Provider>
            </ThemeProvider>
          </JssProvider>
        </I18nextProvider>
      </React.Suspense>
    );
  });

  test("renders Layout component", async () => {
    await testStore.dispatch(setIsMobile(false));

    const desktopContent = await screen.findByTestId("desktop-content");

    expect(desktopContent).toBeInTheDocument();
  });

  test("renders Layout component if rendering MobileContent", async () => {
    await testStore.dispatch(setIsMobile(true));

    const mobileContent = await screen.findByTestId("mobile-content");

    expect(mobileContent).toBeInTheDocument();
  });

  test("Checks if 'I understand' button has been clicked", async () => {
    const button = await screen.findByTestId("understand-button");

    const mockFn = jest.fn(() => fireEvent.click(button));

    mockFn();

    expect(mockFn).toBeCalledTimes(1);
  });

  test("Check if resizing works", async () => {
    // simulate window resize
    function fireResize(width: number) {
      global.innerWidth = width;
      global.dispatchEvent(new Event("resize"));
    }

    act(() => fireResize(1200));
    expect(testStore.getState().Device.isMobile).toBeFalsy();

    act(() => fireResize(300));
    expect(testStore.getState().Device.isMobile).toBeTruthy();
  });

  test("Check if orientation changed", async () => {
    // simulate orientation change
    function fireChangeOrientation(width: number, height: number) {
      global.innerWidth = width;
      global.innerHeight = height;
      global.dispatchEvent(new Event("orientationchange"));
    }

    act(() => fireChangeOrientation(1200, 800));
    expect(testStore.getState().Device.orientation).toBe("portrait");

    act(() => fireChangeOrientation(365, 800));
    expect(testStore.getState().Device.orientation).toBe("landscape");
  });
});
