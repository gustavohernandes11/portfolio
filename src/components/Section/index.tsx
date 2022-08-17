import * as Styled from "./styles.js";

export interface SectionType {
    justify?: string;
    align?: string;
    children: React.ReactNode;
    className?: string;
    color?: string;
    id?: string;
}

export const Section = ({
    children,
    className,
    justify,
    color,
    align,
    id,
}: SectionType): JSX.Element => {
    const styles = {
        justify: justify,
        align: align,
    };
    return (
        <Styled.Container
            {...styles}

            className={className}
            color={color}
            id={id}
        >
            {children}
        </Styled.Container>
    );
};
