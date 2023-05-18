import {
    StyledInformationImageImg,
    StyledInformationImagePicture,
    StyledInformationImageShadow,
} from "./styledComponents";
import Typography from "../typography/index";

interface InformationImageProps {
    imageUrl: string;
    name: string;
    disabled?: boolean;
}

function InformationImage(props: InformationImageProps): JSX.Element {
    const { imageUrl, name, disabled } = props;
    return (
        <StyledInformationImagePicture disabled={disabled}>
            <StyledInformationImageShadow>
                <Typography.Title size="h2" color="white" weight="bold">
                    {name}
                </Typography.Title>
            </StyledInformationImageShadow>
            <StyledInformationImageImg src={imageUrl} />
        </StyledInformationImagePicture>
    );
}

export default InformationImage;
