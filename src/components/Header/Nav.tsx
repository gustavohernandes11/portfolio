import styled from "styled-components";
import { Menu as MenuIcon, X } from "@styled-icons/feather";
import React, { useState } from "react";
import { NavLink } from "./NavLink";
import { IconButton } from "components/IconButton";

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <ResponsiveNav>
                <IconButton
                    onClick={toggleMenu}
                    icon={MenuIcon}
                    size={25}
                    isMenuOpen={isMenuOpen}
                />
            </ResponsiveNav>

            {isMenuOpen && (
                <MenuDrawer className={isMenuOpen ? "open" : ""}>
                    <MenuContent>
                        <DrawerHeader>
                            <IconButton
                                icon={X}
                                size={25}
                                onClick={closeMenu}
                            />
                        </DrawerHeader>
                        <DrawerBody>
                            <NavLink onClick={closeMenu} href="#home">
                                INÍCIO
                            </NavLink>
                            <NavLink onClick={closeMenu} href="#about">
                                SOBRE
                            </NavLink>
                            <NavLink onClick={closeMenu} href="#projects">
                                PROJETOS
                            </NavLink>
                            <NavLink onClick={closeMenu} href="#contact">
                                CONTATO
                            </NavLink>
                        </DrawerBody>
                    </MenuContent>
                </MenuDrawer>
            )}

            <DesktopNav>
                <NavLink href="#home">INÍCIO</NavLink>
                <NavLink href="#about">SOBRE</NavLink>
                <NavLink href="#projects">PROJETOS</NavLink>
                <NavLink href="#contact">CONTATO</NavLink>
            </DesktopNav>
        </>
    );
};

const ResponsiveNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (min-width: 768px) {
        display: none;
    }
`;

const DesktopNav = styled.nav`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`;

const MenuDrawer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    z-index: 99;

    transition: transform 0.3s ease;

    &.open {
        transform: translateX(0);
    }
`;

const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: #fff;
`;

const DrawerHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 1rem;
`;
const DrawerBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;
