import { JssProvider, ThemeProvider } from "react-jss";

import ControlsContent from "./ControlsContent";
import MainContent from "./MainContent";
import MapsContent from "./MapsContent";
import React from "react";
import jssSetUp from "utils/jssSetUp";
import { useData } from "context";

export interface IAppProps {}

export default function App(props: IAppProps): JSX.Element {
  const { theme } = useData()!;

  return (
    <React.Fragment>
      <JssProvider registry={jssSetUp(theme)}>
        <ThemeProvider theme={theme}>
          <React.Suspense fallback="loading">
            <main>
              <div id="main">
                <MainContent />
              </div>
              <div id="controls">
                <ControlsContent />
              </div>
              <div id="maps">
                <MapsContent />
              </div>
            </main>
            <footer>
              <div>
                <small>
                  fusliez notes v0.7.0 [9/14/2020] made with &#10084; by the{" "}
                  <a href="https://github.com/Kedyn/fusliez-notes#authors-and-acknowledgment">
                    fuslie fam
                  </a>
                  .
                </small>
              </div>
            </footer>
          </React.Suspense>
        </ThemeProvider>
      </JssProvider>
    </React.Fragment>
  );
}
