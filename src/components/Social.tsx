import { Github, Linkedin } from "@styled-icons/simple-icons";
import React from "react";
import { IconButton } from "./IconButton";

export const Social = () => {
    return (
        <span>
            <SocialIconButton
                icon={Github}
                href="https://github.com/gustavohernandes11"
            />
            <SocialIconButton
                icon={Linkedin}
                href="https://www.linkedin.com/in/gustavo-hernandes11/"
            />
        </span>
    );
};
type SocialIconProps = {
    icon: any;
    href: string;
};
const SocialIconButton = ({ icon, href }: SocialIconProps) => {
    return (
        <a href={href}>
            <IconButton icon={icon} size={20} />
        </a>
    );
};
