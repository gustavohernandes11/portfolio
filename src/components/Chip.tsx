import styled from "styled-components";

type ChipType = {
    text: string;
};
export const Chip = ({ text }: ChipType) => (
    <Container>
        <StyledText>{text}</StyledText>
    </Container>
);

const Container = styled.div`
    border-radius: 5rem;
    background-color: #ecececc3;
    margin: 0;
`;
const StyledText = styled.div`
    font-size: 1rem;
    margin: 0;
    padding: 0.25rem 0.5rem;
    color: #000000;
`;
