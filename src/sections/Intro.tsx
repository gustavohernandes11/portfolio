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
                <Logo />
                <div>
                    <Title>{name}</Title>
                    <p>{title}</p>
                </div>
                <Social />
            </Animate>
        </Content>
    </SectionContainer>
);

const Title = styled.h1`
    font-size: 6rem;
    font-weight: bolder;
    margin: 0;
`;

const Content = styled.div`
    margin: auto 8rem;
    max-width: 45%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
