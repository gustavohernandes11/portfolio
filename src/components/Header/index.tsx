import {
    Icon,
    IconButton,
    useDisclosure,
    useMediaQuery,
} from "@chakra-ui/react";
import { Menu as MenuIcon } from "@styled-icons/feather";
import { MenuModal } from "components/MenuModal";
import React from "react";
import { Wrapper } from "../Wrapper";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const Header: React.FC = () => {
    const [isMobileScreen] = useMediaQuery("(max-width: 800px)");
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Wrapper
                justifyContent="space-between"
                align="center"
                bgColor="#141414"
                as="header"
                padding={["1rem 2rem", "1rem 6rem", "1rem 12rem"]}
                position="fixed"
                top={0}
                left={0}
                width="100%"
                maxWidth="100vw"
                margin={0}
                zIndex={100}
            >
                <Logo />
                {!!isMobileScreen ? (
                    <IconButton
                        aria-label="toggle menu"
                        onClick={onOpen}
                        variant="ghost"
                        colorScheme="gray"
                        _hover={{
                            bgColor: "transparent",
                        }}
                    >
                        <Icon
                            fontSize={25}
                            color="white"
                            fontWeight={700}
                            as={MenuIcon}
                        />
                    </IconButton>
                ) : (
                    <Nav />
                )}
            </Wrapper>

            {!!isOpen && <MenuModal onClose={onClose} isOpen={isOpen} />}
        </>
    );
};
