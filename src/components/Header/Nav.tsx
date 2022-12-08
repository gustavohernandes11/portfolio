import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "./NavLink";

export const Nav = ({ onClick, ...props }: any) => {
    return (
        <Flex as="nav" gap="1rem" {...props}>
            <NavLink onClick={onClick} href="#about">
                SOBRE
            </NavLink>
            <NavLink onClick={onClick} href="#stack">
                STACK
            </NavLink>
            <NavLink onClick={onClick} href="#projects">
                PROJETOS
            </NavLink>
            <NavLink onClick={onClick} href="#contact">
                CONTATO
            </NavLink>
        </Flex>
    );
};
