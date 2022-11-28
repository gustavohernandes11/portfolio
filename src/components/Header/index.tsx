import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "./NavLink";
import { Wrapper } from "../Wrapper";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
    return (
        <Wrapper
            justifyContent="space-between"
            align="center"
            bgColor="custom.darkGrey"
            as="header"
            padding={["1rem 2rem", "1rem 6rem", "1rem 12rem"]}
            margin={0}
        >
            <Logo />
            <Flex gap="1rem">
                <NavLink href="#about">SOBRE</NavLink>
                <NavLink href="#projects">PROJETOS</NavLink>
                <NavLink href="#contact">CONTATO</NavLink>
            </Flex>
        </Wrapper>
    );
};
