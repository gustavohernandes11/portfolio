import styled, { css } from "styled-components";

type ButtonType = {
    variant?: "light" | "normal";
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

export const StyledButton = styled("button")<{ variant: "light" | "normal" }>`
    ${({ variant }) => css`
        font-size: 1rem;
        padding: 1rem;
        border: none;
        border-radius: 0.25rem;
        text-decoration: none;
        color: black;

        ${variant == "light" &&
        css`
            background-color: transparent;
            :hover {
                cursor: pointer;
            }
        `}
        ${variant == "normal" &&
        css`
            background-color: black;
            color: white;
            :hover {
                background-color: #1a1a1a;
                cursor: pointer;
            }
        `}
    `};
`;
