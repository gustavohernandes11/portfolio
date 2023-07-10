import styled from "styled-components";

export const Grid = ({ children }: any) => {
    return <Container>{children}</Container>;
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;
`;
