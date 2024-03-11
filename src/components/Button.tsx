import styled, { css } from "styled-components";
import { pulseAnimation } from "./FixedArrow";

type ButtonType = {
    variant?: "light" | "normal" | "purple-rounded";
    as?: "button" | "a";
    href?: string;
    target?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
    children,
    variant = "normal",
    as = "button",
    href,
    ...props
}: ButtonType) => {
    return (
        <StyledButton href={href} as={as} variant={variant} {...props}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled("button")<{
    variant: "light" | "normal" | "purple-rounded";
}>`
    ${({ variant }) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        padding: 0.5rem 1.25rem;
        border: none;
        border-radius: 0.25rem;
        text-decoration: none;
        color: black;
        white-space: nowrap;

        ${variant == "light" &&
        css`
            background-color: transparent;
            :hover {
                cursor: pointer;
            }
        `}
        ${variant == "purple-rounded" &&
        css`
            border-radius: 32rem;
            background-color: purple;
            color: white;
            :hover {
                background-color: #850e85;
                cursor: pointer;
                animation: ${pulseAnimation} 1.5s;
            }
        `}
        ${variant == "normal" &&
        css`
            background-color: black;
            color: white;
            :hover {
                background-color: #2e2e2e;
                cursor: pointer;
            }
        `}
    `};
`;
