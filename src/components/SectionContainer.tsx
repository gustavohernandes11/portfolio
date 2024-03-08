import styled, { CSSProperties } from "styled-components";

interface SectionContainerProps {
    children: React.ReactNode;
    direction?: CSSProperties["flexDirection"];
    id?: string;
}

export const SectionContainer = ({
    children,
    direction,
    id,
}: SectionContainerProps) => {
    return (
        <Container direction={direction} id={id}>
            {children}
        </Container>
    );
};

interface ContainerProps {
    direction?: CSSProperties["flexDirection"];
}

export const Container = styled.section<ContainerProps>`
    min-height: 100vh;
    display: flex;
    flex-direction: ${({ direction }) => direction || "column"};
`;
