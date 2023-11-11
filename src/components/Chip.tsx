import styled from "styled-components";

type ChipType = {
    children: string;
};
export const Chip = ({ children }: ChipType) => {
    return <Container>{children}</Container>;
};

const Container = styled.div`
    padding: 0.5rem;
    border-radius: 0.25rem;
    background-color: #e0e0e0;
    color: black;
`;
