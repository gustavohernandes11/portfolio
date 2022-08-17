import * as Styled from "./styles.js";

export interface SectionType {
    justifyContent?: string;
    alignItems?: string;
    children: React.ReactNode;
    className?: string;
    color?: string;
    id?: string;
}

export const Section = ({
    children,
    className,
    justifyContent,
    color,
    alignItems,
    id,
}: SectionType): JSX.Element => {
    const styles = {
        justifyContent: justifyContent,
        alignItems: alignItems,
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
