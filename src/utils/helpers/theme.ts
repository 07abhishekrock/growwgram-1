import { COLORS } from "utils/constants";

function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem("color-mode");
  const hasPersistedPreference = typeof persistedColorPreference === "string";
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return "light";
}

export const updateThemeColors = (colorMode: string) => {
  const root = document.documentElement;
  const colors = colorMode === "light" ? COLORS.light : COLORS.dark;
  Object.keys(colors).forEach((key) => {
    root.style.setProperty(key, (colors as any)[key]);
  });

  root.style.setProperty("--initial-color-mode", colorMode);
};

export const initializeTheme = () => {
  const colorMode = getInitialColorMode();
  document.firstElementChild!.setAttribute("data-theme", colorMode);

  updateThemeColors(colorMode);
};
