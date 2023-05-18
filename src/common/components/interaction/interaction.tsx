import { Interaction as InteractionProps } from "../../../domain/models/interaction";
import Icon from "../icons";
import Typography from "../typography";
import {
    StyledInteractionContainer,
    StyledInteractionIcon,
    StyledInteractionImageContainer,
    StyledInteractionNameContainer,
} from "./styledComponents";

function Interaction(props: InteractionProps) {
    const { data, interaction } = props;
    return (
        <StyledInteractionContainer>
            <StyledInteractionImageContainer src={data.images.jpg.image_url} />
            <StyledInteractionIcon interaction={interaction}>
                {interaction === "love" && <Icon.Love />}
                {interaction === "hate" && <Icon.Hate />}
            </StyledInteractionIcon>
            <StyledInteractionNameContainer>
                <Typography.Title size="h3" weight="bold" color={"white"}>
                    {data.name}
                </Typography.Title>
            </StyledInteractionNameContainer>
        </StyledInteractionContainer>
    );
}

export default Interaction;
