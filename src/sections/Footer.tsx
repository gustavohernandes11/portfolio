import { Social } from "components/Social";
import styled from "styled-components";

export const Footer = () => (
    <StyledFooter>
        <div>
            <Social color="white" />
            <p>© 2024-present Gustavo Hernandes. All Rights Reserved.</p>
        </div>
    </StyledFooter>
);

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5rem;
    min-height: 50vh;
    background-color: black;
    color: #bebebe;
`;
