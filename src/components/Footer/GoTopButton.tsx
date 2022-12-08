import { IconButton, Tooltip } from "@chakra-ui/react";
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
        <Tooltip label="Voltar para o topo">
            <IconButton
                onClick={handleClick}
                colorScheme="blackAlpha"
                aria-label={"Voltar para o topo"}
                transition="transform 0.3s"
                _hover={{
                    cursor: "pointer",
                    transform: "scale(1.1)",
                }}
            >
                <ArrowUp size={20} />
            </IconButton>
        </Tooltip>
    );
};
