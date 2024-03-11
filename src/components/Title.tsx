import styled from "styled-components";

export const Title = ({ children, ...props }: any) => (
    <StyledHeading {...props}>{children}</StyledHeading>
);

const StyledHeading = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 3rem;
    margin: 2rem 0;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;
