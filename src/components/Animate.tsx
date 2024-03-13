import { RecurrenceOptions, useIntersection } from "hooks/useIntersection";
import React from "react";
import styled, { css } from "styled-components";

type AnimateOptions = "slideLeft" | "zoomIn" | "slideRight";

interface AnimateProps {
    children: React.ReactNode;
    type: AnimateOptions;
    recurrence?: RecurrenceOptions;
}

export const Animate = ({
    children,
    type,
    recurrence = "always",
}: AnimateProps) => {
    const { isIntersecting, ref } = useIntersection({ recurrence });

    const animationProps = {
        ref,
        isIntersecting,
    };

    {
        if (type === "slideLeft")
            return (
                <StyledslideLeft {...animationProps}>
                    {children}
                </StyledslideLeft>
            );
        else if (type === "slideRight")
            return (
                <StyledslideRight {...animationProps}>
                    {children}
                </StyledslideRight>
            );
        else {
            return <StyledZoomIn {...animationProps}>{children}</StyledZoomIn>;
        }
    }
};

const AnimationContainer = styled.div`
    transition: all 750ms ease-in-out;

    @media (prefers-reduced-motion) {
        transform: scale(1);
        opacity: 1;
    }
`;

const StyledslideLeft = styled(AnimationContainer)<{
    isIntersecting: boolean;
}>`
    ${({ isIntersecting }) => css`
        opacity: ${isIntersecting ? "1" : "0"};
        transform: ${isIntersecting ? "translateX(0)" : "translateX(5%)"};
    `}
`;

const StyledslideRight = styled(AnimationContainer)<{
    isIntersecting: boolean;
}>`
    ${({ isIntersecting }) => css`
        transition: all 750ms ease-in-out;
        opacity: ${isIntersecting ? "1" : "0"};
        transform: ${isIntersecting ? "translateX(0)" : "translateX(-5%)"};
    `}
`;

const StyledZoomIn = styled(AnimationContainer)<{
    isIntersecting: boolean;
}>`
    ${({ isIntersecting }) => css`
        transition: all 750ms ease-in-out;
        transform: ${isIntersecting ? "scale(1)" : "scale(0)"};
    `}
`;
