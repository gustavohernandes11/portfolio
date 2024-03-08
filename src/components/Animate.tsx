import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

interface AnimateProps {
    children: React.ReactNode;
    type: "slideIn" | "zoomIn";
}

const Animate = ({ children, type }: AnimateProps) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <StyledAnimate ref={ref} inView={inView} type={type}>
            {children}
        </StyledAnimate>
    );
};

const StyledAnimate = styled.div<{ inView: boolean; type: string }>`
    ${({ inView, type }) => css`
        transition: all 750ms;
        opacity: ${inView ? "100%" : "0"};
        transform: ${inView
            ? type === "slideIn"
                ? "translateX(0)"
                : type === "zoomIn"
                ? "scale(1)"
                : ""
            : type === "slideIn"
            ? "translateX(-20%)"
            : type === "zoomIn"
            ? "scale(0)"
            : ""};
    `}
`;

export default Animate;
