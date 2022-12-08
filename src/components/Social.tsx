import { Stack, IconButton, Icon } from "@chakra-ui/react";
import { Github, Linkedin } from "@styled-icons/simple-icons";
import React from "react";

export const Social = ({ ...props }) => {
    return (
        <Stack direction="row" justify="center" {...props}>
            <SocialIconButton
                icon={Github}
                href="https://github.com/gustavohernandes11"
            />
            <SocialIconButton
                icon={Linkedin}
                href="https://www.linkedin.com/in/gustavo-hernandes11/"
            />
        </Stack>
    );
};
type SocialIconProps = {
    icon: any;
    href: string;
};
const SocialIconButton = ({ icon, href }: SocialIconProps) => {
    return (
        <IconButton
            as="a"
            href={href}
            target="_blank"
            aria-label={`${icon} button link`}
            colorScheme="white"
            color="whiteAlpha.500"
            variant="ghost"
            _hover={{
                color: "white",
                // bgColor: "purple.900",
            }}
        >
            <Icon fontSize={30} fontWeight={900} as={icon} />
        </IconButton>
    );
};
