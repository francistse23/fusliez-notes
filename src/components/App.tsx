import { JssProvider, ThemeProvider } from "react-jss";

import { DEFAULT_THEME_DATA } from "constants/theme";
import Layout from "./Layout";
import { Provider } from "react-redux";
import React from "react";
import jssSetUp from "utils/jssSetUp";
import registerFaIcons from "../utils/registerFaIcons";
import store from "store";

registerFaIcons();

export default function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <JssProvider registry={jssSetUp()}>
          <ThemeProvider theme={DEFAULT_THEME_DATA}>
            <Layout />
          </ThemeProvider>
        </JssProvider>
      </Provider>
    </>
  );
}
