import { Social } from "components/Social";
import styled from "styled-components";

export const Footer = () => (
    <StyledFooter>
        <Social color="white" />
        <p>© 2024-present Gustavo Hernandes. All Rights Reserved.</p>
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
