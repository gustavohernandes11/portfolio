import * as Styled from "./styles.js";
import Link from "next/link";
import { Button } from "@mui/material";

export const Nav = () => {
    return (
        <Styled.Container>
            <Link href="#about-me-section">
                <Button>About</Button>
            </Link>
            <Link href="#projects-section">
                <Button>Projects</Button>
            </Link>
            <Link href="#contact-me-section">
                <Button>Contact-me</Button>
            </Link>
            <Link href="">
                <Button>
                    Blog ↗
                </Button>
            </Link>
        </Styled.Container>
    );
};
