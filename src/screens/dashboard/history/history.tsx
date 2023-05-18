import Icon from "../../../common/components/icons";
import Interaction from "../../../common/components/interaction";
import Typography from "../../../common/components/typography";
import useHistory from "./controllers/useHistory";
import {
    StyledHistoryButtonBackContainer,
    StyledHistoryContainer,
    StyledHistoryListContainer,
} from "./styledComponents";

function History(): React.ReactElement {
    const { interactions, goHome } = useHistory();
    return (
        <StyledHistoryContainer>
            <StyledHistoryButtonBackContainer onClick={goHome}>
                <Icon.ArrowLeft />
            </StyledHistoryButtonBackContainer>
            <Typography.Title size="h1" weight="bold">
                History
            </Typography.Title>
            <Typography.Text size="normal" weight="light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography.Text>
            <Typography.Text size="medium" weight="bold">
                17 december
            </Typography.Text>
            <StyledHistoryListContainer>
                {interactions?.map((interactionProps, idx) => (
                    <Interaction key={idx.toString()} {...interactionProps} />
                ))}
                {!interactions?.length && (
                    <Typography.Text size="normal" weight="light" center>
                        Loading...
                    </Typography.Text>
                )}
            </StyledHistoryListContainer>
        </StyledHistoryContainer>
    );
}

export default History;
