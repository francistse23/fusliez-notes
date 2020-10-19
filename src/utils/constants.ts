import { IPlayers, IScores, ISettings, ITheme } from "./types";

import { STYLE_VARS } from "./styleVars";

export const VERSION = "0.10.1";

export const BREAKPOINT = 846;

export const DEFAULT_SCORES: IScores = {
  crewmateWins: 0,
  crewmateLosses: 0,
  impostorWins: 0,
  impostorLosses: 0,
};

export const NAMESPACE = "fusliez-notes-";

export const DEFAULT_SETTINGS: ISettings = {
  showNames: true,
  isColorBlind: false,
};

// This should be revisit as constants should not have dynamic values
export const DEFAULT_THEME_DATA: ITheme = {
  backgroundColor: STYLE_VARS.backgroundColorPrimary,
  backgroundColorAlt: STYLE_VARS.backgroundColorSecondary,
  textColor: STYLE_VARS.textColorPrimary,
  textColorAlt: STYLE_VARS.textColorSecondary,

  inputBackgroundColor: STYLE_VARS.backgroundColorSecondary,
  inputTextColor: STYLE_VARS.textColorPrimary,

  neutralColor: STYLE_VARS.neutralColor,

  crewmateColor: STYLE_VARS.crewmateColor,
  crewmateColorHover: STYLE_VARS.crewmateColorAlt,

  impostorColor: STYLE_VARS.impostorColor,
  impostorColorHover: STYLE_VARS.impostorColorAlt,

  borderColor: STYLE_VARS.borderColor,

  linkColor: STYLE_VARS.linkColor,
  linkColorHover: STYLE_VARS.linkColorHover,

  dangerColor: STYLE_VARS.dangerColor,
  dangerColorHover: STYLE_VARS.dangerColorHover,

  activeColor: STYLE_VARS.activeColor,
};

export const DEFAULT_PLAYERS: IPlayers = {
  innocentPlayers: [],
  susPlayers: [],
  evilPlayers: [],
  deadPlayers: [],
  unknownPlayers: [
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
};
