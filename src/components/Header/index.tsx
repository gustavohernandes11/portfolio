import { Logo } from "./Logo";
import { Nav } from "./Nav";
import styled from "styled-components";

export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Logo />
            <Nav />
        </StyledHeader>
    );
};

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 1rem 5rem;
    z-index: 999;

    @media (max-width: 768px) {
        padding: 1rem;
        background-color: transparent;
        border: none;
    }
`;
