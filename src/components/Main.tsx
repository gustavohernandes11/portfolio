import styled from "styled-components";

export const Main = ({ children }: any) => <StyledMain>{children}</StyledMain>;

export const StyledMain = styled.main`
    margin: clamp(1rem, 2vw, 5rem);

    @media (max-width: 768px) {
        max-width: unset;
    }
`;
