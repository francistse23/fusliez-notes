import "regenerator-runtime/runtime";

import { render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import MobileLayout from "components/Layout/MobileLayout";
import React from "react";
import registerFaIcons from "../utils/registerFaIcons";
import store from "store";

/* eslint-disable react/display-name */
describe("MobileLayout component tests", () => {
  let testStore: typeof store;

  beforeEach(async () => {
    testStore = store;
    registerFaIcons();

    await render(
      <DefaultComponentWrapper testStore={testStore}>
        <MobileLayout />
      </DefaultComponentWrapper>
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

    expect(notesNavbarButton).toBeInTheDocument();
  });
});
