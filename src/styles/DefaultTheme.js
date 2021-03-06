const colors = {
  primary: "rgba(90, 69, 255, 100)",
  secondary: "rgba(59, 201, 234, 100)",
  surface: "rgba(255, 255, 255, 100)",
  background: "rgba(251, 252, 253, 100)",
  error: "rgba(255, 69, 100, 100)",
  divider: "rgba(234, 237, 242, 100)",
  strong: "rgba(18, 20, 44, 100)",
  medium: "rgba(70, 78, 88, 100)",
  light: "rgba(165, 173, 183, 100)",
  strongInverse: "rgba(255, 255, 255, 100)",
  mediumInverse: "rgba(255, 255, 255, 87)",
  lightInverse: "rgba(255, 255, 255, 68)"
}

export default {
  colors,
  disabledOpacity: 0.5,
  typography: {
    headline1: {
      fontFamily: "System",
      fontWeight: "700",
      fontSize: 60,
      lineHeight: 71,
      letterSpacing: 0
    },
    headline2: {
      fontFamily: "System",
      fontWeight: "700",
      fontSize: 48,
      lineHeight: 58,
      letterSpacing: 0
    },
    headline3: {
      fontFamily: "System",
      fontWeight: "700",
      fontSize: 34,
      lineHeight: 40,
      letterSpacing: 0
    },
    headline4: {
      fontFamily: "System",
      fontWeight: "700",
      fontSize: 24,
      lineHeight: 34,
      letterSpacing: 0
    },
    headline5: {
      fontFamily: "System",
      fontWeight: "700",
      fontSize: 20,
      lineHeight: 26,
      letterSpacing: 0
    },
    headline6: {
      fontFamily: "System",
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0
    },
    subtitle1: {
      fontFamily: "System",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 26,
      letterSpacing: 0
    },
    subtitle2: {
      fontFamily: "System",
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 22,
      letterSpacing: 0
    },
    body1: {
      fontFamily: "System",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 26,
      letterSpacing: 0
    },
    body2: {
      fontFamily: "System",
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 22,
      letterSpacing: 0
    },
    button: {
      fontFamily: "System",
      fontWeight: "600",
      fontSize: 14,
      lineHeight: 16,
      letterSpacing: 0
    },
    caption: {
      fontFamily: "System",
      fontWeight: "400",
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0
    },
    overline: {
      fontFamily: "System",
      fontWeight: "500",
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 2
    }
  },
  spacing: {
    gutters: 16,
    text: 4,
    small: 8,
    medium: 12,
    large: 16
  },
  borderRadius: {
    global: 6,
    button: 24
  },
  elevation: {
    0: {
      shadowColor: colors.strong,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 0,
      shadowOpacity: 0,
      borderWidth: 0,
      borderColor: colors.strong,
      borderOpacity: 0
    },
    1: {
      shadowColor: colors.strong,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.06,
      borderWidth: 1,
      borderColor: colors.strong,
      borderOpacity: 0.06
    },
    2: {
      shadowColor: colors.strong,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.08,
      borderWidth: 0,
      borderColor: colors.strong,
      borderOpacity: 0
    },
    3: {
      shadowColor: colors.strong,
      shadowOffset: { width: 0, height: 6 },
      shadowRadius: 6,
      shadowOpacity: 0.12,
      borderWidth: 0,
      borderColor: colors.strong,
      borderOpacity: 0
    }
  }
}
