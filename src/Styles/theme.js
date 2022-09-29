import { colors, fontWeight, letterSpacingLtr } from "./tokens";

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

const palette = {
  white: colors.white,
  black: colors.black,
  interactive: {
    primary: {
      default: colors.blue[600],
    },
    neutral: {
      light: colors.gray[300],
      disabled: colors.gray[400],
      dark: colors.gray[500],
      default: colors.gray[700],

    },
    hover: colors.blue[700],
    hoverLight: colors.blue[50],
    focus: colors.purple[600],
    active: colors.purple[800],
    activeLight: colors.purple[50],
    defaultColor: colors.white,
    disabled: colors.gray[100],
    disabledColor: colors.gray[400],
  },
  neutral: {
    light: colors.gray[100],
    lightCopy: colors.gray[300],
    default: colors.gray[700],
    disabled: colors.gray[400],
    lohp: colors.gray[10],
  },
  information: {
    warning: {
      dark: colors.yellow[800],
    }
  },
  background: {
    grayLight: colors.gray[100],
    gray: colors.gray[300],
    blueLight: colors.blue[100],
    blue: colors.blue[600],
    blueDark: colors.blue[900],
    yellowLight: colors.yellow[50],
  },
};

const button = {
  border: {
    primary: palette.interactive.primary.default,
    primaryInverse: palette.white,
    secondary: palette.interactive.neutral.light,
    secondaryInverse: palette.white,
    ghostPrimary: "transparent",
    ghostPrimaryInverse: "transparent",
    ghostNeutral: "transparent",
    ghostNeutralInverse: "transparent",
    hover: {
      primary: palette.interactive.hover,
      primaryInverse: palette.interactive.hoverLight,
      secondary: palette.interactive.hover,
      secondaryInverse: palette.interactive.hover,
      ghostPrimary: "transparent",
      ghostPrimaryInverse: "transparent",
      ghostNeutral: "transparent",
      ghostNeutralInverse: "transparent",
    },
    active: {
      primary: palette.interactive.active,
      primaryInverse: palette.interactive.active,
      secondary: palette.interactive.active,
      secondaryInverse: palette.interactive.activeLight,
      ghostPrimary: "transparent",
      ghostPrimaryInverse: "transparent",
      ghostNeutral: "transparent",
      ghostNeutralInverse: "transparent",
    },
    focus: {
      primary: palette.interactive.primary.default,
      primaryInverse: palette.interactive.hoverLight,
      secondary: palette.interactive.primary.default,
      secondaryInverse: palette.white,
      ghostPrimary: "transparent",
      ghostPrimaryInverse: "transparent",
      ghostNeutral: "transparent",
      ghostNeutralInverse: "transparent",
    },
  },
  background: {
    primary: palette.interactive.primary.default,
    primaryInverse: palette.white,
    secondary: palette.white,
    secondaryInverse: "transparent",
    ghostPrimary: "transparent",
    ghostPrimaryInverse: "transparent",
    ghostNeutral: "transparent",
    ghostNeutralInverse: "transparent",
    hover: {
      primary: palette.interactive.hover,
      primaryInverse: palette.interactive.hoverLight,
      secondary: palette.interactive.hoverLight,
      secondaryInverse: palette.interactive.hoverLight,
      ghostPrimary: palette.interactive.hoverLight,
      ghostPrimaryInverse: "transparent",
      ghostNeutral: palette.interactive.hoverLight,
      ghostNeutralInverse: "transparent",
    },
    active: {
      primary: palette.interactive.active,
      primaryInverse: palette.interactive.activeLight,
      secondary: palette.interactive.active,
      secondaryInverse: palette.interactive.activeLight,
      ghostPrimary: palette.interactive.activeLight,
      ghostPrimaryInverse: "transparent",
      ghostNeutral: palette.interactive.activeLight,
      ghostNeutralInverse: "transparent",
    },
    focus: {
      primary: palette.interactive.primary.default,
      primaryInverse: palette.interactive.hoverLight,
      secondary: palette.interactive.hover,
      secondaryInverse: palette.interactive.hover,
      ghostPrimary: palette.interactive.hoverLight,
      ghostPrimaryInverse: "transparent",
      ghostNeutral: palette.interactive.hoverLight,
      ghostNeutralInverse: "transparent",
    },
  },
  label: {
    primary: palette.white,
    primaryInverse: palette.interactive.primary.default,
    secondary: palette.black,
    secondaryInverse: palette.white,
    ghostPrimary: palette.interactive.primary.default,
    ghostPrimaryInverse: palette.white,
    ghostNeutral: palette.black,
    ghostNeutralInverse: palette.white,
    hover: {
      primary: palette.interactive.white,
      primaryInverse: palette.interactive.hover,
      secondary: palette.interactive.hover,
      secondaryInverse: palette.interactive.hover,
      ghostPrimary: palette.interactive.primary.default,
      ghostPrimaryInverse: palette.white,
      ghostNeutral: palette.black,
      ghostNeutralInverse: palette.white,
    },
    active: {
      primary: palette.white,
      primaryInverse: palette.interactive.active,
      secondary: palette.white,
      secondaryInverse: palette.white,
      ghostPrimary: palette.interactive.primary.default,
      ghostPrimaryInverse: palette.white,
      ghostNeutral: palette.black,
      ghostNeutralInverse: palette.white,
    },
    focus: {
      primary: palette.white,
      primaryInverse: palette.interactive.hover,
      secondary: palette.white,
      secondaryInverse: palette.white,
      ghostPrimary: palette.interactive.primary.default,
      ghostPrimaryInverse: palette.white,
      ghostNeutral: palette.black,
      ghostNeutralInverse: palette.white,
    },
  },
};

const spacing = {
  50: "4px",
  100: "8px",
  125: "10px",
  150: "12px",
  200: "16px",
  300: "24px",
  400: "32px",
  500: "40px",
};

const borderRadius = {
  50: "4px",
  100: "8px",
  200: "16px",
  300: "24px",
  400: "32px",
};

const fontType = {
  d1: {
    fontSize: "3rem",
    lineHeight: "3.5rem",
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacingLtr[100],
    mq1: {
      fontSize: "4rem",
      lineHeight: "4.5rem",
    },
    mq2: {
      fontSize: "5.25rem",
      lineHeight: "5.75rem",
    },
  },
  d1Semibold: {
    fontSize: "3rem",
    lineHeight: "3.5rem",
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacingLtr[100],
    mq1: {
      fontSize: "4rem",
      lineHeight: "4.5rem",
    },
    mq2: {
      fontSize: "5.25rem",
      lineHeight: "5.75rem",
    },
  },
  d2: {
    fontSize: "1.75rem",
    lineHeight: "2.25rem",
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacingLtr[100],
    mq1: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
    },
    mq2: {
      fontSize: "2.5rem",
      lineHeight: "3rem",
    },
  },
  d2Semibold: {
    fontSize: "1.75rem",
    lineHeight: "2.25rem",
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacingLtr[100],
    mq1: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
    },
    mq2: {
      fontSize: "2.5rem",
      lineHeight: "3rem",
    },
  },
  h1: {
    fontSize: "1.75rem",
    lineHeight: "2.25rem",
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacingLtr[50],
    mq1: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
    },
  },
  h1Semibold: {
    fontSize: "1.75rem",
    lineHeight: "2.25rem",
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacingLtr[50],
    mq1: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
    },
  },
  h2: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    fontWeight: fontWeight.normal,
    letterSpacing: letterSpacingLtr[50],
  },
  h2Semibold: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacingLtr[50],
  },
  h2Bold: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacingLtr[50],
  },
  h3: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacingLtr[50],
  },
  h3Bold: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacingLtr[50],
  },
  h4: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacingLtr[50],
  },
  h4Bold: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacingLtr[50],
  },
  body1: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: fontWeight.normal,
    letterSpacing: 0,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: fontWeight.normal,
    letterSpacing: 0,
  },
};

export const theme = { palette, button, spacing, borderRadius, fontType, breakpoints, mq };
