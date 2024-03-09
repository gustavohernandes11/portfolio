import styled from "styled-components";

export const Main = ({ children }: any) => {
    return <StyledMain>{children}</StyledMain>;
};

export const StyledMain = styled.main`
    @media (max-width: 768px) {
        max-width: unset;
    }
`;
