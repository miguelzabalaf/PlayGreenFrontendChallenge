import InformationActions from "../../../common/components/informationActions";
import InformationImage from "../../../common/components/informationImage";
import ThemeButton from "../../../common/components/themeButton";
import useTheme from "../../../common/controllers/theme/useTheme";
import useHome from "./controllers/useHome";
import {
    StyledHomeContainer,
    StyledHomeThemeButtonContainer,
} from "./styledComponents";

function Home(): JSX.Element {
    const {
        characterName,
        characterImageUrl,
        handleHateCharacter,
        handleLoveCharacter,
        disabledOptions,
        disabledImage,
    } = useHome();
    const { theme, toggleTheme } = useTheme();
    return (
        <StyledHomeContainer>
            <InformationImage
                name={characterName}
                imageUrl={characterImageUrl}
                disabled={disabledImage}
            />
            <InformationActions
                disabled={disabledOptions}
                onClickHate={handleHateCharacter}
                onClickLove={handleLoveCharacter}
            />
            <StyledHomeThemeButtonContainer>
                <ThemeButton mode={theme} onClick={toggleTheme} />
            </StyledHomeThemeButtonContainer>
        </StyledHomeContainer>
    );
}

export default Home;
