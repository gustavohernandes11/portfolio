import Image from "next/image";
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import ArrowSVG from "../assets/Arrow.svg";
import Animate from "./Animate";

const scrollDownByOneVh = () => {
    window.scrollBy({
        top: window.innerHeight * 0.8,
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

const pulseAnimation = keyframes`
    5% {
        transform: scale(1);
    }
    15% {
        transform: scale(1.1);
    }
    25% {
        transform: scale(0.9);
    }
    35% {
        transform: scale(1.1);
    }
    45% {
        transform: scale(1);
    }
`;

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
    aspect-ratio: 1/1;
    padding: 1rem;
    bottom: 10rem;
    right: 10rem;
    background-color: transparent;
    border: none;

    :focus {
        border-radius: 100%;
        outline: 3px dashed black;
    }

    :hover {
        cursor: pointer;
        animation: ${pulseAnimation} 2s infinite;
    }
`;
