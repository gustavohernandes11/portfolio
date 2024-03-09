import styled from "styled-components";

export const Title = ({ children, ...props }: any) => (
    <StyledHeading {...props}>{children}</StyledHeading>
);

const StyledHeading = styled.h2`
    text-align: center;
    font-size: 3rem;
    margin: 2rem 0;
`;
