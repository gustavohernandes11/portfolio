import Image from "next/image";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Animations } from "styles/Animations";
import ArrowSVG from "../assets/Arrow.svg";
import { Animate } from "./Animate";

const scrollDownByOneVh = () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
    });
};

const scrollUpToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

export const FixedArrow = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight;
            setIsAtBottom(isBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <StyledFixedArrow
            onClick={isAtBottom ? scrollUpToTop : scrollDownByOneVh}
        >
            <Animate type="zoomIn">
                <StyledImage
                    isAtBottom={isAtBottom}
                    src={ArrowSVG}
                    alt="Descer"
                />
            </Animate>
        </StyledFixedArrow>
    );
};

export const StyledImage = styled(Image)<{ isAtBottom: boolean }>`
    ${({ isAtBottom }) =>
        isAtBottom
            ? css`
                  transform: rotate(180deg);
                  transition: transform ease-in-out 0.5s;
              `
            : css`
                  transform: rotate(0deg);
                  transition: transform ease-in-out 0.5s;
              `}
`;

export const StyledFixedArrow = styled.button`
    position: fixed;
    padding: 1rem;
    bottom: 10rem;
    right: 10rem;
    aspect-ratio: 1/1;
    background-color: transparent;
    border: none;
    z-index: 100;

    :focus {
        border-radius: 100%;
        outline: 3px dashed black;
    }

    :hover {
        cursor: pointer;
        animation: ${Animations.pulse} 2s infinite;
    }

    @media (max-width: 768px) {
        bottom: 1rem;
        right: 1rem;
        scale: 0.6;
    }
`;
