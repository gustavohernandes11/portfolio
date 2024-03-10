import Link from "next/link";
import styled from "styled-components";

type NavLinkProps = {
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
};

export const NavLink = ({ children, href, onClick }: NavLinkProps) => {
    return (
        <StyledLink href={href} onClick={onClick}>
            {children}
        </StyledLink>
    );
};

export const StyledLink = styled(Link)`
    color: black;
    position: relative;
    margin-bottom: 1rem;
    text-decoration: none;
    margin: 0 0.5rem;
    font-size: 1rem;
    font-weight: bold;
`;
