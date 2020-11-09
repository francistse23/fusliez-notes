import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { JssProvider, ThemeProvider } from "react-jss";
import { render, screen, waitFor } from "@testing-library/react";

import ControlsContent from "../components/ControlsContent";
import { DEFAULT_THEME_DATA } from "utils/constants";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import React from "react";
import i18n from "../i18n";
import jssSetUp from "utils/jssSetUp";
import { renderHook } from "@testing-library/react-hooks";
import store from "store";

// const component = renderHook(() => (
//   <I18nextProvider i18n={i18n}>
//     <Provider store={store}>
//       <JssProvider registry={jssSetUp(DEFAULT_THEME_DATA)}>
//         <ThemeProvider theme={DEFAULT_THEME_DATA}>
//           <ControlsContent />
//         </ThemeProvider>
//       </JssProvider>
//     </Provider>
//   </I18nextProvider>
// ));

const component = (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <JssProvider registry={jssSetUp(DEFAULT_THEME_DATA)}>
        <ThemeProvider theme={DEFAULT_THEME_DATA}>
          <ControlsContent />
        </ThemeProvider>
      </JssProvider>
    </Provider>
  </I18nextProvider>
);

// jest.mock("react-i18next", () => ({
//   // this mock makes sure any components using the translate hook can use it without a warning being shown
//   useTranslation: () => {
//     return {
//       t: () => (Component: React.Component) => (props: any) => (
//         <Component t={() => ""} {...props} />
//       ),
//       // i18n: {
//       //   changeLanguage: () => new Promise(() => {}),
//       // },
//     };
//   },
// }));

describe("ControlsContent component tests", () => {
  test("should render ControlsContent component", () => {
    render(component);
  });

  test('should render button for "Settings"', async () => {
    render(component);

    await waitFor(() => {
      expect(screen.getByTestId("settings button")).toBeInTheDocument();
    });
    // screen.debug();
  });
});
