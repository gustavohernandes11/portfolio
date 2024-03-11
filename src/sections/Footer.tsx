import Animate from "components/Animate";
import { Social } from "components/Social";
import styled from "styled-components";
import { Mixins } from "styles/Mixins";

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
    justify-content: center;

    border-radius: 2rem;
    padding: 5rem;
    min-height: 50vh;
    background-color: black;
    color: #bebebe;

    @media (max-width: 768px) {
        ${Mixins.flexCenter("column")}
    }
`;
