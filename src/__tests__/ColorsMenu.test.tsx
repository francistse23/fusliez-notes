import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render, screen } from "@testing-library/react";

import ColorsMenu from "components/ColorsMenu";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import { setPlayersSections } from "store/slices/PlayersSectionsSlice";
import store from "store";
import { swapPlayersColors } from "components/ColorsMenu/ColorsMenu";

describe("ColorsMenu component tests", () => {
  let testStore: typeof store;

  beforeEach(() => {
    const mockStore = configureStore();
    testStore = mockStore(store.getState());

    render(
      <Provider store={testStore}>
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

  test("should not swap color if the current and target colors are the same", async () => {
    const tempStore = testStore.getState().PlayersSections.sections;

    const redColorSwatch = await screen.getByTestId("color-swatch-red");

    fireEvent.click(redColorSwatch);

    expect(testStore.getState().PlayersSections.sections).toStrictEqual(
      tempStore
    );
  });

  test("should swap color of two players if their colors are different (in different sections)", async () => {
    testStore = store;

    await testStore.dispatch(
      setPlayersSections([
        { id: 0, title: "main.lists.innocent", players: [] },
        {
          id: 1,
          title: "main.lists.suspicious",
          players: [{ id: "Blue", playerName: "tester1", color: "blue" }],
        },
        { id: 2, title: "main.lists.evilHitList", players: [] },
        { id: 3, title: "main.lists.dead", players: [] },
        {
          id: 4,
          title: "main.lists.unknown",
          players: [
            { id: "Brown", playerName: "", color: "brown" },
            { id: "Red", playerName: "tester", color: "red" },
            { id: "Orange", playerName: "", color: "orange" },
            { id: "Yellow", playerName: "", color: "yellow" },
            { id: "Lime", playerName: "", color: "lime" },
            { id: "Green", playerName: "", color: "green" },
            { id: "Cyan", playerName: "", color: "cyan" },
            { id: "Purple", playerName: "", color: "purple" },
            { id: "Pink", playerName: "", color: "pink" },
            { id: "White", playerName: "", color: "white" },
            { id: "Black", playerName: "", color: "black" },
          ],
        },
        { id: 5, title: "main.lists.unused", players: [] },
      ])
    );

    const currentStore = await testStore.getState().PlayersSections.sections;
    const res = swapPlayersColors("red", "blue", currentStore) ?? currentStore;

    await testStore.dispatch(setPlayersSections(res));

    expect(testStore.getState().PlayersSections.sections[1].players).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: "Blue",
          playerName: "tester1",
          color: "red",
        }),
      ])
    );
    expect(testStore.getState().PlayersSections.sections[4].players).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: "Red",
          playerName: "tester",
          color: "blue",
        }),
      ])
    );
  });
});
