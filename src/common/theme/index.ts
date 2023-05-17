export interface ThemeConfig {
    neutral: string;
    background: string;
    primary1: string;
    primary2: string;
    title: string;
    text: string;
    textMuted: string;
    danger: string;
    white: string;
}

interface Theme {
    light: ThemeConfig;
    dark: ThemeConfig;
}

const theme: Theme = {
    light: {
        neutral: "#C3C3C3",
        background: "#E5E5E5",
        primary1: "#236BFE",
        primary2: "#0D4ED3",
        title: "#161617",
        text: "#4D4C59",
        textMuted: "#777777",
        danger: "#EA596F",
        white: "#FFFFFF",

    },
    dark: {
        neutral: "#333333",
        background: "#181828",
        primary1: "#236BFE",
        primary2: "#0D4ED3",
        title: "#FEFEFE",
        text: "#D0D0D3",
        textMuted: "#777777",
        danger: "#EA596F",
        white: "#FFFFFF",
    }
};

export default theme;