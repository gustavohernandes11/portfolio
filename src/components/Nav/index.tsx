import * as Styled from "./styles";
import { useState } from 'react'
import Link from "next/link";
import { Menu } from "@styled-icons/entypo";

import { Button, IconButton, Drawer } from "@mui/material";

export const NavLinks = () => {
    return (
        <>
        <Link href="#about-me-section">
            <Button>Sobre</Button>
        </Link>
        <Link href="#projects-section">
            <Button>Projetos</Button>
        </Link>
        <Link href="#contact-me-section">
            <Button>Contato</Button>
        </Link>
        {/* <Link href="" passHref>
                <a href="" target="_blank" rel="noreferrer">
                <Button>Blog ↗</Button>
                </a>
            </Link> */}
    </>
            )
};

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Styled.Container>
            <span id="nav-buttons">
                <NavLinks />
            </span>

            <span id="drawer-nav-buttons">
                <IconButton color="primary" onClick={() => setIsMenuOpen(true)}>
                    <Menu height={25} width={25} />
                </IconButton>
            </span>
            <Drawer
                onClose={() => setIsMenuOpen(false)}
                anchor="right"
                open={isMenuOpen}
            >
                <NavLinks />
            </Drawer>
        </Styled.Container>
    );
};
