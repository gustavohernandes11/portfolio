import Image from "next/image";
import React from "react";
import styled from "styled-components";
import GrayArrowSVG from "../assets/GrayArrow.svg";
import Animate from "../components/Animate";

interface ComponentType {
    children?: React.ReactNode;
}

export const WrapBetweenArrows = ({ children }: ComponentType) => {
    return (
        <Wrapper>
            <Animate type="slideInRight">
                <StyledImage src={GrayArrowSVG} alt="arrow" />
            </Animate>
            {children}
            <Animate type="slideInLeft">
                <StyledImage
                    style={{ transform: "Rotate(180deg)" }}
                    src={GrayArrowSVG}
                    alt="arrow"
                />
            </Animate>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;
    @media (max-width: 768px) {
        gap: 1rem;
    }
`;
const StyledImage = styled(Image)`
    @media (max-width: 768px) {
        display: none;
    }
`;
