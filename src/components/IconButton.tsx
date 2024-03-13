import React, { Attributes } from "react";
import styled from "styled-components";

type IconButtonProps = {
    onClick?: () => any;
    icon: string | React.FunctionComponent<{}> | React.ComponentClass<{}, any>;
    color?: string;
    size: number;
};

export const IconButton = ({ onClick, icon, ...props }: IconButtonProps) => (
    <StyledButton onClick={onClick}>
        {React.createElement(icon, { ...(props as Attributes) })}
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
