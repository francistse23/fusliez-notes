import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import ColorsMenu from "components/ColorsMenu";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import store from "store";

// import { swapPlayersColors } from "components/ColorsMenu/ColorsMenu";

describe("ColorsMenu component tests", () => {
  beforeEach(() => {
    const mockStore = configureStore();

    render(
      <Provider store={mockStore(store.getState())}>
        <ColorsMenu
          isMenuShowing={true}
          setIsMenuShowing={() => null}
          currentColor="red"
        />
      </Provider>
    );
  });

  test("should render ColorsMenu component", async () => {
    const component = await screen.getByTestId("colors-menu");
    expect(component).toBeInTheDocument();
  });

  test("should render all 12 color swatches", async () => {
    const colorSwatchButtons = await screen.findAllByTestId(/color-swatch/, {
      exact: false,
    });

    expect(colorSwatchButtons).toHaveLength(12);
  });

  // test("should not swap color if the current and target colors are the same", () => {});
});
