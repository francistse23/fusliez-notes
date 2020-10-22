import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import PlayersListsSlice, {
  setPlayersFromList,
} from "../store/slices/PlayersListsSlice";
import { render, screen } from "@testing-library/react";

import ColorsMenu from "../components/ColorsMenu";
import { Provider } from "react-redux";
import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import store from "store";
import userEvent from "@testing-library/user-event";

const component = render(
  <Provider store={store}>
    <ColorsMenu
      isMenuShowing={true}
      setIsMenuShowing={() => null}
      currentColor="red"
    />
  </Provider>
);

describe("ColorsMenu component tests", () => {
  test("renders ColorsMenu component", async () => {
    return component;
  });
  test("renders all 12 color swatches", async () => {
    component;

    const colorSwatchButtons = await component.findAllByTestId(/color-swatch/, {
      exact: false,
    });

    expect(colorSwatchButtons).toHaveLength(12);
  });
});
