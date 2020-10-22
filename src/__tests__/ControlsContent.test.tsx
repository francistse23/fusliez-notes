import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import ControlsContent from "../components/ControlsContent";
import React from "react";
import { renderHook } from "@testing-library/react-hooks";

// describe("ControlsContent component tests", () => {
//   test("renders ControlsContent component", () => {
//     const { result } = renderHook(() => <ControlsContent />);

//     console.log(result.current);

//     screen.debug();
//   });
// });
