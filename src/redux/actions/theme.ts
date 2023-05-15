import types from "../reducers/theme/constants";
import { Theme } from "../reducers/theme/initialState";
import { PayloadAction } from '@reduxjs/toolkit';

export function themeActions() {
    return {
        onChangeTheme: function (payload: Theme): PayloadAction<Theme> {
            return {
                type: types.CHANGE_THEME,
                payload
            };
        }
    };
}