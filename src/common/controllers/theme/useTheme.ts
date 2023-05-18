import { useDispatch, useSelector } from "react-redux";
import { themeSelectors } from "../../../redux/selectors/theme";
import { themeActions } from "../../../redux/actions/theme";
import { Theme } from "../../../redux/reducers/theme/initialState";

function useTheme() {
    // Hooks
    const dispatch = useDispatch();

    // Selectors
    const { getThemeSelector } = themeSelectors();
    const { theme } = useSelector(getThemeSelector());

    // Actions
    const { onChangeTheme } = themeActions();

    // Methods
    function toggleTheme() {
        dispatch(onChangeTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark));
    }

    return {
        theme,
        toggleTheme
    };
}

export default useTheme;