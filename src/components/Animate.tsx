import { useIntersection } from "hooks/useIntersection";
import React from "react";
import styled, { css } from "styled-components";

type AnimateOptions = "slideInLeft" | "zoomIn" | "slideInRight";

interface AnimateProps {
    children: React.ReactNode;
    type: AnimateOptions;
}

const Animate = ({ children, type }: AnimateProps) => {
    const { isIntersecting, ref } = useIntersection();

    const animationProps = {
        ref,
        isIntersecting,
        type,
    };

    {
        if (type === "slideInLeft")
            return (
                <StyledSlideInLeft {...animationProps}>
                    {children}
                </StyledSlideInLeft>
            );
        else if (type === "slideInRight")
            return (
                <StyledSlideInRight {...animationProps}>
                    {children}
                </StyledSlideInRight>
            );
        else {
            return <StyledZoomIn {...animationProps}>{children}</StyledZoomIn>;
        }
    }
};

const StyledSlideInLeft = styled.div<{
    isIntersecting: boolean;
    type: AnimateOptions;
}>`
    ${({ isIntersecting }) => css`
        transition: all 750ms ease-in-out;
        opacity: ${isIntersecting ? "1" : "0"};
        transform: ${isIntersecting ? "translateX(0)" : "translateX(5%)"};

        @media (prefers-reduced-motion) {
            transform: translateX(0);
            opacity: 1;
        }
    `}
`;
const StyledSlideInRight = styled.div<{
    isIntersecting: boolean;
    type: AnimateOptions;
}>`
    ${({ isIntersecting }) => css`
        transition: all 750ms ease-in-out;
        opacity: ${isIntersecting ? "1" : "0"};
        transform: ${isIntersecting ? "translateX(0)" : "translateX(-5%)"};

        @media (prefers-reduced-motion) {
            transform: translateX(0);
            opacity: 1;
        }
    `}
`;

const StyledZoomIn = styled.div<{
    isIntersecting: boolean;
    type: AnimateOptions;
}>`
    ${({ isIntersecting }) => css`
        transition: all 750ms ease-in-out;
        transform: ${isIntersecting ? "scale(1)" : "scale(0)"};

        @media (prefers-reduced-motion) {
            transform: scale(1);
            opacity: 1;
        }
    `}
`;

export default Animate;
