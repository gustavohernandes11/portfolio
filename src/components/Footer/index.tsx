import styled from "styled-components";
import { Social } from "components/Social";
import { GoTopButton } from "./GoTopButton";

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Social />
            <GoTopButton />
        </StyledFooter>
    );
};

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;

    max-width: 50rem;
    margin: auto;
    padding: 1rem;
    
    @media (max-width: 768px) {
        max-width: unset;
    }
`;
