import * as Styled from "./styles";
import { Typography } from "@mui/material";
import { SocialBar } from "../SocialBar";

export const Footer = () => {
    return (
        <Styled.Container>
            <SocialBar />
            <Typography>Created with Next.js</Typography>
        </Styled.Container>
    );
};
