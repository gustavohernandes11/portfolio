import Image from "next/image";
import styled, { keyframes } from "styled-components";
import ArrowSVG from "../assets/Arrow.svg";

const scrollDownByOneVh = () => {
    window.scrollBy({
        top: window.innerHeight * 0.8,
        behavior: "smooth",
    });
};

export const GoDown = () => {
    return (
        <StyledGoDown onClick={scrollDownByOneVh}>
            <Image src={ArrowSVG} alt="Descer" />
        </StyledGoDown>
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

export const StyledGoDown = styled.button`
    position: fixed;
    bottom: 10rem;
    right: 10rem;
    background-color: transparent;
    border: none;

    :hover {
        cursor: pointer;
        animation: ${pulseAnimation} 2s infinite;
    }
`;
