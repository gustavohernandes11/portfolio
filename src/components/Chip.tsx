import styled from "styled-components";

type ChipType = {
    text: string;
};
export const Chip = ({ text }: ChipType) => <Container>{text}</Container>;

const Container = styled.div`
    padding: 0.5rem;
    border-radius: 0.25rem;
    background-color: #e0e0e0;
    color: black;
`;
