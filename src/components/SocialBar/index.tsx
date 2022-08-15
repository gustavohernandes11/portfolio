import * as Styled from "./styles.js";
import { Gift } from "@styled-icons/heroicons-solid";
import { Star } from "@styled-icons/heroicons-solid";
import { IconButton } from "@mui/material";

export const SocialBar = () => {
    return (
        <Styled.Container>
            <IconButton>
                <Star height={25} width={25} />
            </IconButton>
            <IconButton>
                <Gift height={25} width={25} />
            </IconButton>
            <IconButton>
                <Star height={25} width={25} />
            </IconButton>
        </Styled.Container>
    );
};
