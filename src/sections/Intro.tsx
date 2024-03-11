import Animate from "components/Animate";
import { Logo } from "components/Logo";
import { SectionContainer } from "components/SectionContainer";
import { Social } from "components/Social";
import styled from "styled-components";

type IntroType = {
    name: string;
    title: string;
};

export const Intro = ({ name, title }: IntroType) => (
    <SectionContainer dottedBackground id="home">
        <Content>
            <Animate type="slideInLeft">
                <HStack>
                    <Logo />
                </HStack>
                <HStack>
                    <MainHeading>{name}</MainHeading>
                    <p>{title}</p>
                </HStack>
                <HStack>
                    <Social />
                </HStack>
            </Animate>
        </Content>
    </SectionContainer>
);

const MainHeading = styled.h1`
    font-size: 6rem;
    font-weight: bolder;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 3.25rem;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: auto 8rem;
    max-width: 45%;

    @media (max-width: 768px) {
        margin: 1rem;
        max-width: 100%;
        flex-grow: 1;
    }
`;

const HStack = styled.div`
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        margin-bottom: 3rem;
    }
`;
