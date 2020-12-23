import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { NAMESPACE } from "constants/main";
import { PlayersSectionsMiddleware } from "store/middleware/PlayersSectionsMiddleware";
import store from "store";

describe("PlayersSectionsMiddleware component tests", () => {
  const testStore = store;
  const KEY = `${NAMESPACE}sections`;
  const next = jest.fn((action) => action);

  // console.log(JSON.stringify(testStore.getState().PlayersSections.sections));

  beforeEach(() => {
    // values stored in tests will also be available in other tests unless you run
    localStorage.clear();
  });

  // describe("PlayersSectionsMiddleware Test", () => {
  //   test("should set default section to designated id", async () => {
  //     const action = {
  //       type: "Scores/setDefaultSection",
  //       payload: 2,
  //     };
  //     await PlayersSectionsMiddleware(testStore)(next)(action);

  //     expect(localStorage.__STORE__[KEY]).toBe(
  //       JSON.stringify({
  //         defaultSection: 2,
  //         sections,
  //       })
  //     );
  //   });
  // });
});
