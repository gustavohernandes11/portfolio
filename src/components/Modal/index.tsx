import * as Styled from "./styles.js";
import type { SectionType } from "../Section";

interface ModalType extends SectionType {
    className?: string;
}
export const Modal = ({
    children,
    alignItems,
    justifyContent,
    className,
}: ModalType) => {
    const styles = {
        justifyContent: justifyContent,
        alignItems: alignItems,
    };
    return (
        <Styled.Container
            {...styles}
            className={className}
        >
            {children}
        </Styled.Container>
    );
};
