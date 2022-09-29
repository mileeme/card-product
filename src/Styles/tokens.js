//** Breakpoints */
const breakpoints = {
  xs: "320px",
  sm: "600px",
  md: "1024px",
  lg: "1440px",
  xl: "1920px",
};
const mq = Object.values(breakpoints).map(
  (breakpoint) => `@media (min-width: ${breakpoint})`
);

//** Colors */
const colors = {
  white: "#ffffff",
  black: "#000000",
  gray: {
    10: "#63676B",
    100: "#F5F7F8",
    300: "#E5E7E8",
    400: "#C3C5C6",
    500: "#929599",
    700: "#636363",
  },
  blue: {
    50: "#F3F8FF",
    100: "#EBF3FF",
    600: "#0056D2",
    700: "#00419E",
    800: "#003584",
    900: "#00255D",
  },
  purple: {
    50: "#F7F6FE",
    600: "#6A52E9",
    800: "#382D8B",
  },
  yellow: {
    50: "#F9F7EF",
    800: "#7C6919",
  }
};

//** Font */
const fontWeight = {
  normal: 400,
  semibold: 600,
  bold: 700,
};

const letterSpacingLtr = {
  50: "-0.1px",
  100: "-0.2px",
};

export { breakpoints, mq, colors, fontWeight, letterSpacingLtr };