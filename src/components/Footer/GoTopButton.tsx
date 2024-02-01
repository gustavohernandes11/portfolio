import { ArrowUp } from "@styled-icons/feather";
import { IconButton } from "components/IconButton";

const handleClick = () => {
    const content = document.querySelector("body");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if (!!content) {
        content.scrollTop = 0;
    }
};

export const GoTopButton = () => (
    <IconButton
        onClick={handleClick}
        aria-label={"Voltar para o topo"}
        icon={ArrowUp}
        size={20}
    />
);
