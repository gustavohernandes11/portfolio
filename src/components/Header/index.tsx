import Animate from "components/Animate";
import styled from "styled-components";
import { NavLink } from "./NavLink";

export const Header: React.FC = () => (
    <StyledFixed>
        <Animate type="zoomIn">
            <StyledHeader>
                <NavLink href="#home">INÍCIO</NavLink>
                <NavLink href="#about">SOBRE</NavLink>
                <NavLink href="#projects">PROJETOS</NavLink>
                <NavLink href="#contact">CONTATO</NavLink>
            </StyledHeader>
        </Animate>
    </StyledFixed>
);

export const StyledHeader = styled.header`
    background-color: white;
    border-radius: 100rem;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const StyledFixed = styled.div`
    position: fixed;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
`;
