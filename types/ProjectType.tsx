import { ImageType } from "./ImageType";
import { TagType } from "./TagType";

export type ProjectType = {
    title: string;
    description: string;
    deployUrl?: string;
    githubUrl?: string;
    image: ImageType;
    tags: TagType[];
};
