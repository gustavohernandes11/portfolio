import Animate from "components/Animate";
import { Social } from "components/Social";
import styled from "styled-components";

export const Footer = () => (
    <StyledFooter>
        <Animate type="slideInLeft">
            <Social color="white" />
        </Animate>
        <Animate type="slideInLeft">
            <p>© 2024-present Gustavo Hernandes. All Rights Reserved.</p>
        </Animate>
    </StyledFooter>
);

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    justify-content: center;
    padding: 5rem;
    min-height: 50vh;
    background-color: black;
    color: #bebebe;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
