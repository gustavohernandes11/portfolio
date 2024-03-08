import { Logo } from "components/Header/Logo";
import { SectionContainer } from "components/SectionContainer";
import { Social } from "components/Social";
import styled from "styled-components";

type IntroType = {
    name: string;
    title: string;
};

export const Intro = ({ name, title }: IntroType) => (
    <SectionContainer direction="row">
        <Content>
            <Logo />
            <div>
                <Title id="home">{name}</Title>
                <p>{title}</p>
            </div>
            <Social />
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
