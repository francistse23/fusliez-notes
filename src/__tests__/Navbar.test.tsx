import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import Navbar from "components/Navbar";
import React from "react";
import registerFaIcons from "../utils/registerFaIcons";
import store from "store";

describe("Navbar component tests", () => {
  let testStore: typeof store;

  beforeEach(async () => {
    testStore = store;

    registerFaIcons();

    const onChangeActiveViewMockFn = jest.fn();
    const setIsDrawerOpenMockFn = jest.fn();

    await render(
      <DefaultComponentWrapper testStore={testStore}>
        <Navbar
          activeView=""
          onChangeActiveView={onChangeActiveViewMockFn}
          setIsDrawerOpen={setIsDrawerOpenMockFn}
          orientation="landscape"
        />
      </DefaultComponentWrapper>
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
