import { IconButton } from "@chakra-ui/react";
import { ArrowUp } from "@styled-icons/feather";
import React from "react";

const handleClick = () => {
    const content = document.querySelector("body");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if (!!content) {
        content.scrollTop = 0;
    }
};

export const GoTopButton = () => {
    return (
        <IconButton
            onClick={handleClick}
            colorScheme="blackAlpha"
            aria-label={"go top"}
        >
            <ArrowUp size={20} />
        </IconButton>
    );
};
