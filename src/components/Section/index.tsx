import * as Styled from "./styles.js";

interface SectionType {
    children: React.ReactNode;
    full?: boolean;
    justifyContent?: string;
    color?: string;
    alignItems?: string;
    name?: string;
    id?: string | undefined;
    main?: boolean | undefined;
}

export const Section = ({
    children,
    full,
    color,
    justifyContent,
    alignItems,
    name,
    id,
    main,
}: SectionType): JSX.Element => {
    return (
        <Styled.Container
            color={color}
            full={full}
            justifyContent={justifyContent}
            alignItems={alignItems}
            name={name}
            id={id}
            main={main}
        >
            {children}
        </Styled.Container>
    );
};
