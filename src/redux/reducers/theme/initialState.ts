export enum Theme {
    Light = "light",
    Dark = "dark"
}

export interface ThemeInitialState {
    theme: Theme;
}

export const initialState: ThemeInitialState = {
    theme: Theme.Light
};