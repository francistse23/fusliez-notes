import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { DEFAULT_SECTION, DEFAULT_SECTIONS } from "constants/sections";

import { NAMESPACE } from "constants/main";
import { PlayersSectionsMiddleware } from "store/middleware/PlayersSectionsMiddleware";
import store from "store";

describe("PlayersSectionsMiddleware component tests", () => {
  const testStore = store;
  const KEY = `${NAMESPACE}sections`;
  const next = jest.fn((action) => action);

  beforeEach(() => {
    // values stored in tests will also be available in other tests unless you run
    localStorage.clear();
  });

  describe("PlayersSectionsMiddleware Test", () => {
    test("should set default section to designated id", async () => {
      const action = {
        type: "PlayersSections/setDefaultSection",
        payload: 2,
      };

      await PlayersSectionsMiddleware(testStore)(next)(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          defaultSection: 2,
          sections: DEFAULT_SECTIONS,
        })
      );
    });

    test("should set section title from payload", async () => {
      const action = {
        type: "PlayersSections/setPlayersSectionsTitle",
        payload: {
          index: 4,
          title: "Testing Unknown",
        },
      };

      await PlayersSectionsMiddleware(testStore)(next)(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          defaultSection: 4,
          sections: [
            { id: 0, title: "main.lists.innocent", players: [] },
            { id: 1, title: "main.lists.suspicious", players: [] },
            { id: 2, title: "main.lists.evilHitList", players: [] },
            { id: 3, title: "main.lists.dead", players: [] },
            {
              id: 4,
              title: "Testing Unknown",
              players: [
                { id: "Brown", playerName: "", color: "brown" },
                { id: "Red", playerName: "", color: "red" },
                { id: "Orange", playerName: "", color: "orange" },
                { id: "Yellow", playerName: "", color: "yellow" },
                { id: "Lime", playerName: "", color: "lime" },
                { id: "Green", playerName: "", color: "green" },
                { id: "Cyan", playerName: "", color: "cyan" },
                { id: "Blue", playerName: "", color: "blue" },
                { id: "Purple", playerName: "", color: "purple" },
                { id: "Pink", playerName: "", color: "pink" },
                { id: "White", playerName: "", color: "white" },
                { id: "Black", playerName: "", color: "black" },
              ],
            },
            { id: 5, title: "main.lists.unused", players: [] },
          ],
        })
      );
    });

    test("should reset players sections positions", async () => {
      testStore.getState().PlayersSections.sections = [
        {
          id: 0,
          title: "main.lists.innocent",
          players: [{ id: "Blue", playerName: "", color: "blue" }],
        },
        {
          id: 1,
          title: "main.lists.suspicious",
          players: [{ id: "Brown", playerName: "", color: "brown" }],
        },
        {
          id: 2,
          title: "main.lists.evilHitList",
          players: [
            { id: "Red", playerName: "", color: "red" },
            { id: "Orange", playerName: "", color: "orange" },
          ],
        },
        {
          id: 3,
          title: "main.lists.dead",
          players: [{ id: "White", playerName: "", color: "white" }],
        },
        {
          id: 4,
          title: "main.lists.unknown",
          players: [
            { id: "Yellow", playerName: "", color: "yellow" },
            { id: "Lime", playerName: "", color: "lime" },
            { id: "Green", playerName: "", color: "green" },
            { id: "Cyan", playerName: "", color: "cyan" },
            { id: "Purple", playerName: "", color: "purple" },
            { id: "Pink", playerName: "", color: "pink" },
            { id: "Black", playerName: "", color: "black" },
          ],
        },
        { id: 5, title: "main.lists.unused", players: [] },
      ];

      const action = {
        type: "PlayersSections/resetPlayersSectionsPositions",
      };

      await PlayersSectionsMiddleware(testStore)(next)(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          defaultSection: 4,
          sections: [
            { id: 0, title: "main.lists.innocent", players: [] },
            { id: 1, title: "main.lists.suspicious", players: [] },
            { id: 2, title: "main.lists.evilHitList", players: [] },
            { id: 3, title: "main.lists.dead", players: [] },
            {
              id: 4,
              title: "main.lists.unknown",
              players: [
                { id: "Blue", playerName: "", color: "blue" },
                { id: "Brown", playerName: "", color: "brown" },
                { id: "Red", playerName: "", color: "red" },
                { id: "Orange", playerName: "", color: "orange" },
                { id: "White", playerName: "", color: "white" },
                { id: "Yellow", playerName: "", color: "yellow" },
                { id: "Lime", playerName: "", color: "lime" },
                { id: "Green", playerName: "", color: "green" },
                { id: "Cyan", playerName: "", color: "cyan" },
                { id: "Purple", playerName: "", color: "purple" },
                { id: "Pink", playerName: "", color: "pink" },
                { id: "Black", playerName: "", color: "black" },
              ],
            },
            { id: 5, title: "main.lists.unused", players: [] },
          ],
        })
      );
    });

    test("should reset players sections to default", async () => {
      testStore.getState().PlayersSections = {
        defaultSection: 0,
        sections: [
          {
            id: 0,
            title: "main.lists.innocent",
            players: [
              { id: "Blue", playerName: "", color: "blue" },
              { id: "Brown", playerName: "", color: "brown" },
            ],
          },
          {
            id: 1,
            title: "tests section",
            players: [
              { id: "Green", playerName: "", color: "green" },
              { id: "Cyan", playerName: "", color: "cyan" },
              { id: "Purple", playerName: "", color: "purple" },
            ],
          },
          {
            id: 2,
            title: "main.lists.evilHitList",
            players: [
              { id: "Red", playerName: "", color: "red" },
              { id: "Orange", playerName: "", color: "orange" },
            ],
          },
          {
            id: 3,
            title: "main.lists.dead",
            players: [{ id: "White", playerName: "", color: "white" }],
          },
          {
            id: 4,
            title: "unknown",
            players: [
              { id: "Yellow", playerName: "", color: "yellow" },
              { id: "Lime", playerName: "", color: "lime" },

              { id: "Pink", playerName: "", color: "pink" },
              { id: "Black", playerName: "", color: "black" },
            ],
          },
          { id: 5, title: "testing if resetting", players: [] },
        ],
      };

      const action = {
        type: "PlayersSections/resetPlayersSections",
      };

      await PlayersSectionsMiddleware(testStore)(next)(action);

      expect(localStorage.__STORE__[KEY]).toBe(
        JSON.stringify({
          defaultSection: DEFAULT_SECTION,
          sections: DEFAULT_SECTIONS,
        })
      );
    });
  });
});
