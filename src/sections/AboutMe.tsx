import Animate from "components/Animate";
import { SectionContainer } from "components/SectionContainer";
import { Title } from "components/Title";
import { WrapBetweenArrows } from "components/WrapBetweenArrows";
import styled from "styled-components";
import { serializeLexical } from "utils/serializeLexical";

type AboutMeType = {
    content: any;
};

export const AboutMe = ({ content }: AboutMeType) => (
    <SectionContainer center id="about">
        <Animate type="slideInLeft">
            <Title>SOBRE</Title>
        </Animate>
        <WrapBetweenArrows>
            <Animate type="slideInLeft">
                <StyledTextContainer>
                    {content &&
                        !Array.isArray(content) &&
                        typeof content === "object" &&
                        "root" in content &&
                        serializeLexical({
                            nodes: content?.root?.children,
                        })}
                </StyledTextContainer>
            </Animate>
        </WrapBetweenArrows>
    </SectionContainer>
);

const StyledTextContainer = styled.div`
    max-width: 40rem;
    margin-inline: auto;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        padding-inline: 1rem;
        font-size: 1rem;
    }
`;
