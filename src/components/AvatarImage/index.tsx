import * as Styled from "./styles.js";
import Image from "next/image";

interface AvatarImageType {
    color?: string;
    id?: string | undefined;
    src: string;
    alt: string;
    className?: string;
}

export const AvatarImage = ({
    color,
    id,
    src,
    alt,
    className,
}: AvatarImageType) => {
    return (
        <Styled.Wrapper>
            <Styled.Container color={color} id={id} className={className}>
                <Image
                    priority
                    width="250"
                    height="250"
                    src={src}
                    alt={alt}
                ></Image>
            </Styled.Container>
        </Styled.Wrapper>
    );
};
