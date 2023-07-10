import styled from "styled-components";
import React from "react";

export const Title = ({ children, ...props }: any) => {
    return <StyledHeading {...props}>{children}</StyledHeading>;
};

const StyledHeading = styled.h2`
    text-align: center;
    margin: 2rem 0;
`;
