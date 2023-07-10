import styled, { css } from "styled-components";
import { ChevronsDown } from "@styled-icons/feather";
import { Social } from "components/Social";
import { IconButton } from "components/IconButton";

type IntroType = {
    name: string;
    title: string;
};
const scrollDown = () => {
    const scrollTo = window.innerHeight;

    window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
    });
};

export const Intro = ({ name, title }: IntroType) => {
    return (
        <IntroContainer>
            <Container>
                <IntroTitle id="home">{name}</IntroTitle>
                <p>{title}</p>
                <Social />
            </Container>
            <Container>
                <GoDownButton>
                    <IconButton
                        onClick={scrollDown}
                        size={25}
                        icon={ChevronsDown}
                    />
                </GoDownButton>
            </Container>
        </IntroContainer>
    );
};

const GoDownButton = styled.a`
    padding: 2rem;
    box-sizing: content-box;
    border: none;
    background-color: transparent;
    animation: floating 3s ease-in-out infinite;

    @keyframes floating {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }
`;

const IntroTitle = styled.h1`
    font-size: 3rem;
    text-align: center;
    margin: 0.5rem;
`;

const IntroContainer = styled.section`
    min-height: calc(100vh - 10rem);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 7rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
