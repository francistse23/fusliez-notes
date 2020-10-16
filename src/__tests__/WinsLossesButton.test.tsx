import "regenerator-runtime/runtime";

import { render, screen } from "@testing-library/react";

import { ITheme } from "utils/types";
import React from "react";
import WinsLossesButton from "../components/ScoreControls/WinsLossesButton";
import { useTheme } from "react-jss";

const theme = useTheme<ITheme>();

const setup = () => {
  const component = render(
    <WinsLossesButton
      buttonBackgroundColor={theme.impostorColor}
      buttonBackgroundColorHover={theme.impostorColorHover}
      decrement={() => setImpostorWins(impostorWins ? impostorWins - 1 : 0)}
      increment={() => setImpostorWins(impostorWins + 1)}
      score={impostorWins}
      setScore={(value: number) => setImpostorWins(value)}
    />
  );
};

describe("Should render a set of buttons, which includes -, {score}, and +", () => {
  test("renders App component", () => {
    console.log(setup());

    screen.debug();
  });
});
