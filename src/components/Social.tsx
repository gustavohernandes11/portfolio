import { Github, Leetcode, Linkedin } from "@styled-icons/simple-icons";
import { IconButton } from "./IconButton";
import { useMediaQuery } from "hooks/useMediaQuery";

type SocialIconProps = {
    icon: any;
    href: string;
} & SocialProps;

type SocialProps = {
    color?: "white" | "black";
};

export const Social = ({ color = "black" }: SocialProps) => (
    <span>
        <SocialIconButton
            icon={Github}
            color={color}
            href="https://github.com/gustavohernandes11"
        />
        <SocialIconButton
            icon={Linkedin}
            color={color}
            href="https://www.linkedin.com/in/gustavo-hernandes11/"
        />
        <SocialIconButton
            icon={Leetcode}
            color={color}
            href="https://leetcode.com/hernandes11/"
        />
    </span>
);

const SocialIconButton = ({ icon, href, color }: SocialIconProps) => {
    const isTablet = useMediaQuery(1024);

    return (
        <a href={href}>
            <IconButton color={color} icon={icon} size={isTablet ? 20 : 45} />
        </a>
    );
};
