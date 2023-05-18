import { StoreState } from "../controllers/useStoreConfig";
import createSelector from "../helpers/createSelector";

export function themeSelectors() {
    return {
        getThemeSelector: function () {
            return createSelector(
                (state: StoreState) => state.theme,
                (theme) => theme
            );
        }
    };
}