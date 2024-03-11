import styled, { CSSProperties, css } from "styled-components";
import { Mixins } from "styles/Mixins";

interface SectionContainerProps {
    children: React.ReactNode;
    direction?: CSSProperties["flexDirection"];
    minHeight?: React.CSSProperties["minHeight"];
    dottedBackground?: boolean;
    center?: boolean;
    id?: string;
}

export const SectionContainer = ({
    children,
    direction,
    dottedBackground = false,
    id,
    center,
}: SectionContainerProps) => {
    return (
        <Container
            dottedBackground={dottedBackground}
            center={center}
            direction={direction}
            id={id}
        >
            {children}
        </Container>
    );
};

const Container = styled.section<SectionContainerProps>`
    display: flex;
    min-height: ${({ minHeight }) => minHeight || "100vh"};
    flex-direction: ${({ direction }) => direction || "column"};

    ${({ dottedBackground }) =>
        dottedBackground &&
        css`
            --dot-bg: white;
            --dot-color: #b1b1b1;
            --dot-size: 2px;
            --dot-space: 22px;

            background: linear-gradient(
                        90deg,
                        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
                        transparent 1%
                    )
                    center / var(--dot-space) var(--dot-space),
                linear-gradient(
                        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
                        transparent 1%
                    )
                    center / var(--dot-space) var(--dot-space),
                var(--dot-color);

            background-attachment: fixed;
        `}
    ${({ center }) => center && Mixins.flexCenter()}
`;
