import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import ColorsMenu from "../components/ColorsMenu";
import { Provider } from "react-redux";
import React from "react";
import { render } from "@testing-library/react";
import store from "store";

// import PlayersListsSlice, {
//   setPlayersFromList,
// } from "../store/slices/PlayersListsSlice";

// import { renderHook } from "@testing-library/react-hooks";

// import userEvent from "@testing-library/user-event";

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
  test("should renderColorsMenu component", async () => {
    return component;
  });
  test("should renderall 12 color swatches", async () => {
    component;

    const colorSwatchButtons = await component.findAllByTestId(/color-swatch/, {
      exact: false,
    });

    expect(colorSwatchButtons).toHaveLength(12);
  });
});
