import { Github, Leetcode, Linkedin } from "@styled-icons/simple-icons";
import { IconButton } from "./IconButton";

type SocialIconProps = {
    icon: any;
    href: string;
};

export const Social = () => (
    <span>
        <SocialIconButton
            icon={Github}
            href="https://github.com/gustavohernandes11"
        />
        <SocialIconButton
            icon={Linkedin}
            href="https://www.linkedin.com/in/gustavo-hernandes11/"
        />
        <SocialIconButton
            icon={Leetcode}
            href="https://leetcode.com/hernandes11/"
        />
    </span>
);

const SocialIconButton = ({ icon, href }: SocialIconProps) => {
    return (
        <a href={href}>
            <IconButton icon={icon} size={45} />
        </a>
    );
};
