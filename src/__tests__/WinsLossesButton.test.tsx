import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import { DEFAULT_THEME_DATA } from "utils/constants";
import React from "react";
import WinsLossesButton from "../components/ScoreControls/WinsLossesButton";
import { renderHook } from "@testing-library/react-hooks";

function renderComponent({ role, score }: { role: string; score: number }) {
  return renderHook(() =>
    role === "crewmate" ? (
      <WinsLossesButton
        buttonBackgroundColor={DEFAULT_THEME_DATA.crewmateColor}
        buttonBackgroundColorHover={DEFAULT_THEME_DATA.crewmateColorHover}
        decrement={() => (score > 0 ? score-- : 0)}
        increment={() => score++}
        score={score}
        setScore={(value: number) => (score = value)}
      />
    ) : (
      <WinsLossesButton
        buttonBackgroundColor={DEFAULT_THEME_DATA.impostorColor}
        buttonBackgroundColorHover={DEFAULT_THEME_DATA.impostorColorHover}
        decrement={() => (score > 0 ? score-- : 0)}
        increment={() => score++}
        score={score}
        setScore={(value: number) => (score = value)}
      />
    )
  );
}

describe("Should render a set of buttons, which includes -, {score}, and +", () => {
  test("should renderwins/losses button control for crewmate", () => {
    renderComponent({ role: "crewmate", score: 2 });

    // assert initial state
    // screen.debug();
  });
});
