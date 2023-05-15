import types from "./constants";
import { Theme, ThemeInitialState } from "./initialState";
import { PayloadAction } from '@reduxjs/toolkit';

export const handler = {
    [types.CHANGE_THEME](state: ThemeInitialState, action: PayloadAction<Theme>) {
        return {
            ...state,
            theme: action.payload
        };
    }
};
