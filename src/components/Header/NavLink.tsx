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
    position: relative;
    margin-bottom: 1rem;
    color: #000;
    text-decoration: none;
    font-size: 1.5rem;

    @media (min-width: 768px) {
        padding: 0.25rem;
        margin: 0 0.5rem;
        font-size: 1rem;
        font-weight: bold;

        ::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background-color: #000;
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        :hover::after {
            transform: scaleX(1);
        }
    }
`;
