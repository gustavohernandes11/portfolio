import styled from "styled-components";

export const SectionContainer = ({ children }: any) => {
    return <Container>{children}</Container>;
};

export const Container = styled.section`
    margin-top: 5rem;
`;
