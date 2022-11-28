import { Text } from "@chakra-ui/react";
import React from "react";
import { Wrapper } from "../Wrapper";
import { GoTopButton } from "./GoTopButton";

export const Footer: React.FC = () => {
    return (
        <Wrapper
            justifyContent="space-between"
            align="center"
            bgColor="custom.darkGrey"
            justify="space-between"
            as="header"
            padding="3rem 12rem"
            margin={0}
        >
            <Text color="custom.lightGrey">© Gustavo Hernandes</Text>
            <GoTopButton />
        </Wrapper>
    );
};
