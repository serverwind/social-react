export default function loadTheme(theme) {
  const themeSetup = {
    light: {
      bg: "bg-white",
      text: "text-black",
    },
    dark: {
      bg: "bg-gray-800",
      text: "text-white",
    },
  };

  if (theme === "light") {
    return themeSetup.light;
  } else if (theme === "dark") {
    return themeSetup.dark;
  }
}
