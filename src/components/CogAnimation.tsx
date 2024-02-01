import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CogSvg from "../../public/CogIcon.svg";

export const CogAnimation = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setRotation(scrollPosition * 0.3);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <CogContainer>
            <StyledImage
                src={CogSvg}
                alt="Rotating SVG"
                width={300}
                height={300}
                style={{ transform: `rotate(${rotation}deg)` }}
            />
        </CogContainer>
    );
};

const CogContainer = styled.div`
    z-index: -1;
    position: fixed;
    bottom: 0;
    right: 50%;
    transform: translate(50%, 50%);

    @media (max-width: 768px) {
        bottom: unset;
        top: 2rem;
        right: 0;
        transform: translate(50%);
    }
`;

const StyledImage = styled(Image)`
    transition: transform 0.8s ease-in-out;
    height: 100vh;
    width: 100vh;

    @media (max-width: 768px) {
        height: 100vw;
        width: 100vw;
    }
`;
