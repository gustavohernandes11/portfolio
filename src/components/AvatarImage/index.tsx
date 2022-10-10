import * as Styled from "./styles";
import Image from "next/image";

interface AvatarImageType {
    color?: string;
    id?: string;
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
            <Styled.Container color={color} id={id} className={className}>
                <Image
                    priority
                    width="250"
                    height="250"
                    src={src}
                    alt={alt}
                    unoptimized={true}
                />
            </Styled.Container>
    );
};
