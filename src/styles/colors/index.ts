import { css } from "@emotion/react";

export enum Colors {
    white = "#FFFFFF",
    platinum = "#d5e0ec",
    silverLakeBlue = "#778DA9",
    yinmnBlue = "#415A77",
    oxfordBlue = "#1B263B",
    richBlack = "#0D1B2A",
    richBlackDarker = "#050A10",
    richBlackLighter = "#6b7d90",
}

export enum LightTheme {
    primary = Colors.platinum,
    secondary = Colors.richBlackDarker,
    tertiary = Colors.oxfordBlue,

    bgElement = Colors.white,
    textDefault = Colors.richBlackDarker,
    textSecondary = Colors.richBlackLighter,
}

export enum DarkTheme {
    primary = Colors.richBlackDarker,
    secondary = Colors.white,
    tertiary = Colors.platinum,

    bgElement = Colors.richBlack,
    textDefault = Colors.white,
    textSecondary = Colors.platinum,
}

export const ThemeVar = css`
    :root {
        --primary: ${LightTheme.primary};
        --secondary: ${LightTheme.secondary};
        --tertiary: ${LightTheme.tertiary};

        --bg-element: ${LightTheme.bgElement};
        --text-default: ${LightTheme.textDefault};
        --text-secondary: ${LightTheme.textSecondary};
    }

    [data-theme="dark"] {
        --primary: ${DarkTheme.primary};
        --secondary: ${DarkTheme.secondary};
        --tertiary: ${DarkTheme.tertiary};

        --bg-element: ${DarkTheme.bgElement};
        --text-default: ${DarkTheme.textDefault};
        --text-secondary: ${DarkTheme.textSecondary};
    }
`;

export const Theme = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    tertiary: "var(--tertiary)",
    bgElement: "var(--bg-element)",
    textDefault: "var(--text-default)",
    textSecondary: "var(--text-secondary)",
};
