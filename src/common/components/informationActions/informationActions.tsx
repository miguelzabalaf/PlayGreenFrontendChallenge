import Icon from "../icons";
import {
    StyledInformationActionHate,
    StyledInformationActionLove,
    StyledInformationActionsContainer,
} from "./styledComponents";

interface InformationActionsProps {
    onClickHate: () => void;
    onClickLove: () => void;
    disabled?: boolean;
}

function InformationActions(prop: InformationActionsProps): JSX.Element {
    const { onClickHate, onClickLove, disabled } = prop;
    return (
        <StyledInformationActionsContainer>
            <StyledInformationActionHate
                disabled={disabled}
                onClick={onClickHate}
            >
                <Icon.Hate />
            </StyledInformationActionHate>
            <StyledInformationActionLove
                disabled={disabled}
                onClick={onClickLove}
            >
                <Icon.Love />
            </StyledInformationActionLove>
        </StyledInformationActionsContainer>
    );
}

export default InformationActions;
