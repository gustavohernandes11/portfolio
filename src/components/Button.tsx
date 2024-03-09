import styled, { css, keyframes } from "styled-components";

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
const bounceAnimation = keyframes`
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`;

const StyledButton = styled("button")<{
    variant: "light" | "normal" | "purple-rounded";
}>`
    ${({ variant }) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        padding: 1rem 1.5rem;
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
                animation: ${bounceAnimation} 1.5s;
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
