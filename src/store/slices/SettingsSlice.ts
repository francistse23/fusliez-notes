import { DEFAULT_SETTINGS, NAMESPACE } from "utils/constants";
import { ISettings, IUISliceState } from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

function getInitialSate(): ISettings {
  const localSettingsData: string | null = localStorage.getItem(
    `${NAMESPACE}settings`
  );

  if (localSettingsData) {
    const settingsObject = JSON.parse(localSettingsData);

    return {
      showNames: settingsObject.showNames || DEFAULT_SETTINGS.showNames,
      isColorBlind:
        settingsObject.isColorBlind || DEFAULT_SETTINGS.isColorBlind,
    };
  }

  return DEFAULT_SETTINGS;
}

const SettingsSlice = createSlice({
  name: "Scores",
  initialState: getInitialSate(),
  reducers: {
    setShowNames: (state: ISettings, action: PayloadAction<boolean>) => ({
      ...state,
      showNames: action.payload,
    }),
    toggleShowNames: (state: ISettings) => ({
      ...state,
      showNames: !state.showNames,
    }),

    setIsColorBlind: (state: ISettings, action: PayloadAction<boolean>) => ({
      ...state,
      isColorBlind: action.payload,
    }),
    toggleIsColorBlind: (state: ISettings) => ({
      ...state,
      isColorBlind: !state.isColorBlind,
    }),

    resetSettings: () => ({
      ...DEFAULT_SETTINGS,
    }),
  },
});

export const {
  setShowNames,
  toggleShowNames,

  setIsColorBlind,
  toggleIsColorBlind,

  resetSettings,
} = SettingsSlice.actions;

export const getShowNames = (state: IUISliceState): boolean =>
  state.Settings.showNames;

export const getIsColorBlind = (state: IUISliceState): boolean =>
  state.Settings.isColorBlind;

export default SettingsSlice;
