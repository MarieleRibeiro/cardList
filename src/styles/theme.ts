const theme = {
  title: "default",
  colors: {
    gray100: "#FFF2E7",
    gray200: "#FAA777",
    gray300: "#C6C6C6",
    gray400: "#E5E5E5",
    white100: "#f2f2f2",
    white: "#FFFFFF",
    black: "#252525",
  },
} as const;

export type MyTheme = typeof theme;

export default theme;
