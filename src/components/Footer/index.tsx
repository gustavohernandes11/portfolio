import { Social } from "components/Social";
import React from "react";
import { Wrapper } from "../Wrapper";
import { GoTopButton } from "./GoTopButton";
import { ShapeDivider } from "./ShapeDivider";

export const Footer: React.FC = () => {
    return (
        <>
            <ShapeDivider />
            <Wrapper
                justifyContent="space-between"
                align="center"
                bgColor="custom.darkGray"
                justify="space-between"
                as="footer"
                padding={["2rem 3rem", "2rem 6rem", null, "4rem 12rem"]}
                gap={["2rem"]}
                margin={0}
            >
                <Social />
                <GoTopButton />
            </Wrapper>
        </>
    );
};
