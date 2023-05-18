import { Theme } from "../../../redux/reducers/theme/initialState";
import { StyledThemeButton } from "./styledComponents";

interface ThemeButtonProps {
    mode: "dark" | "light";
    onClick: () => void;
}

function ThemeButton(props: ThemeButtonProps): JSX.Element {
    const { mode, onClick } = props;
    return (
        <StyledThemeButton onClick={onClick}>
            {mode === Theme.Dark ? "🌤️" : "🌙"}
        </StyledThemeButton>
    );
}

export default ThemeButton;
