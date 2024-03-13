import styled from "styled-components";
import { WrapperType } from "../../types/WrapperType";

export const Main = ({ children }: WrapperType) => {
    return <StyledMain>{children}</StyledMain>;
};

export const StyledMain = styled.main`
    @media (max-width: 768px) {
        max-width: unset;
    }
`;
