import { StaticImageData } from "next/image";

export type ImageType = {
    alt: string;
    url: string | StaticImageData;
    width: number;
    height: number;
};
