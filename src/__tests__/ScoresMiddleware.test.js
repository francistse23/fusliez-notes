import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { NAMESPACE } from "constants/main";
import { ScoresMiddleware } from "store/middleware/ScoresMiddleware";
import store from "store";

describe("ScoresMiddleware component tests", () => {
  const testStore = store;
  const KEY = `${NAMESPACE}scores`;

  beforeEach(() => {
    // values stored in tests will also be available in other tests unless you run
    localStorage.clear();

    testStore.getState().Scores = {
      crewmateWins: 3,
      crewmateLosses: 2,
      impostorWins: 1,
      impostorLosses: 7,
    };
  });

  describe("crewmate wins tests", () => {
    test("should increment crewmateWins by 1 in local storage", async () => {
      const action = {
        type: "Scores/incrementCrewmateWins",
        payload: undefined,
      };
      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 4,
          crewmateLosses: 2,
          impostorWins: 1,
          impostorLosses: 7,
        })
      );
    });

    test("should decrement crewmateWins by 1 in local storage", async () => {
      const action = {
        type: "Scores/decrementCrewmateWins",
        payload: undefined,
      };
      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 2,
          crewmateLosses: 2,
          impostorWins: 1,
          impostorLosses: 7,
        })
      );
    });

    test("should not decrement crewmateWins past 0 if crewmateWins = 0 in local storage", async () => {
      const action = {
        type: "Scores/decrementCrewmateWins",
        payload: undefined,
      };

      testStore.getState().Scores.crewmateWins = 0;

      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 0,
          crewmateLosses: 2,
          impostorWins: 1,
          impostorLosses: 7,
        })
      );
    });

    test("should set crewmateWins to designated number in local storage", async () => {
      const action = { type: "Scores/setCrewmateWins", payload: 11 };
      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 11,
          crewmateLosses: 2,
          impostorWins: 1,
          impostorLosses: 7,
        })
      );
    });
  });

  describe("crewmate losses tests", () => {
    test("should increment crewmateLosses by 1 in local storage", async () => {
      const action = {
        type: "Scores/incrementCrewmateLosses",
        payload: undefined,
      };

      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 3,
          crewmateLosses: 3,
          impostorWins: 1,
          impostorLosses: 7,
        })
      );
    });

    test("should decrement crewmateLosses by 1 in local storage", async () => {
      const action = {
        type: "Scores/decrementCrewmateLosses",
        payload: undefined,
      };
      await ScoresMiddleware(testStore)(() => ({}))(action);

      const KEY = `${NAMESPACE}scores`;

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 3,
          crewmateLosses: 1,
          impostorWins: 1,
          impostorLosses: 7,
        })
      );
    });

    test("should not decrement crewmateLosses past 0 if crewmateLosses = 0 in local storage", async () => {
      const action = {
        type: "Scores/decrementCrewmateLosses",
        payload: undefined,
      };

      testStore.getState().Scores.crewmateLosses = 0;

      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 3,
          crewmateLosses: 0,
          impostorWins: 1,
          impostorLosses: 7,
        })
      );
    });

    test("should set crewmateLosses to designated number in local storage", async () => {
      const action = { type: "Scores/setCrewmateLosses", payload: 50 };

      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 3,
          crewmateLosses: 50,
          impostorWins: 1,
          impostorLosses: 7,
        })
      );
    });
  });

  describe("impostor wins tests", () => {
    test("should increment impostorWins by 1 in local storage", async () => {
      const action = {
        type: "Scores/incrementImpostorWins",
        payload: undefined,
      };
      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 3,
          crewmateLosses: 2,
          impostorWins: 2,
          impostorLosses: 7,
        })
      );
    });

    test("should decrement impostorWins by 1 in local storage", async () => {
      const action = {
        type: "Scores/decrementImpostorWins",
        payload: undefined,
      };
      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 3,
          crewmateLosses: 2,
          impostorWins: 0,
          impostorLosses: 7,
        })
      );
    });

    test("should not decrement impostorWins past 0 if impostorWins = 0 in local storage", async () => {
      const action = {
        type: "Scores/decrementImpostorWins",
        payload: undefined,
      };

      testStore.getState().Scores.impostorWins = 0;

      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 3,
          crewmateLosses: 2,
          impostorWins: 0,
          impostorLosses: 7,
        })
      );
    });

    test("should set impostorWins to designated number in local storage", async () => {
      const action = { type: "Scores/setImpostorWins", payload: 99 };
      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 3,
          crewmateLosses: 2,
          impostorWins: 99,
          impostorLosses: 7,
        })
      );
    });
  });

  describe("impostor losses tests", () => {
    test("should increment impostorLosses by 1 in local storage", async () => {
      const action = {
        type: "Scores/incrementImpostorLosses",
        payload: undefined,
      };
      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 3,
          crewmateLosses: 2,
          impostorWins: 1,
          impostorLosses: 8,
        })
      );
    });

    test("should decrement impostorLosses by 1 in local storage", async () => {
      const action = {
        type: "Scores/decrementImpostorLosses",
        payload: undefined,
      };
      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 3,
          crewmateLosses: 2,
          impostorWins: 1,
          impostorLosses: 6,
        })
      );
    });

    test("should not decrement impostorLosses past 0 if impostorLosses = 0 in local storage", async () => {
      const action = {
        type: "Scores/decrementImpostorLosses",
        payload: undefined,
      };

      testStore.getState().Scores.impostorLosses = 0;

      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 3,
          crewmateLosses: 2,
          impostorWins: 1,
          impostorLosses: 0,
        })
      );
    });

    test("should set impostorLosses to designated number in local storage", async () => {
      const action = { type: "Scores/setImpostorLosses", payload: 10 };

      await ScoresMiddleware(testStore)(() => ({}))(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          crewmateWins: 3,
          crewmateLosses: 2,
          impostorWins: 1,
          impostorLosses: 10,
        })
      );
    });
  });
});
