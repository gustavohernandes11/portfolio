import styled from "styled-components";
import { Nav } from "./Nav";
import Animate from "components/Animate";

export const Header: React.FC = () => (
    <StyledFixed>
        <Animate type="zoomIn">
            <StyledHeader>
                <Nav />
            </StyledHeader>
        </Animate>
    </StyledFixed>
);

export const StyledHeader = styled.header`
    background-color: white;
    border-radius: 100rem;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        padding: 1rem;
        background-color: transparent;
        border: none;
    }
`;
export const StyledFixed = styled.div`
    position: fixed;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
`;
