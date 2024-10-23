const initialState = {
  theme: "light",
};

export const settingsReducer = (state = initialState, action: { type: string; data: any }) => {
  switch (action.type) {
    case "SET-LIGHT-THEME":
      return {
        ...state,
        theme: "light",
      };
    case "SET-DARK-THEME":
      return {
        ...state,
        theme: "dark",
      };
    default:
      return state;
  }
};

export function setLightThemeAC(theme: string) {
  return { type: "SET-LIGHT-THEME", theme };
}

export function setDarkThemeAC(theme: string) {
  return { type: "SET-DARK-THEME", theme };
}
