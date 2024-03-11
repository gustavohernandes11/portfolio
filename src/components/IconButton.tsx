import React from "react";
import styled from "styled-components";

export const IconButton = ({ onClick, icon, ...props }: any) => (
    <StyledButton onClick={onClick}>
        {React.createElement(icon, { ...props })}
    </StyledButton>
);

const StyledButton = styled.button`
    padding: 0.5rem;
    margin: 0.2rem;
    background: transparent;
    border: none;

    :hover {
        cursor: pointer;
        color: #161616;
    }
`;
