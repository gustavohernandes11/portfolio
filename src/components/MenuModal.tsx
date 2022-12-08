import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
} from "@chakra-ui/react";
import { Nav } from "./Header/Nav";

export const MenuModal = ({ isOpen, onClose }: any) => {
    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bgColor="custom.black" padding="4rem 2rem">
                <DrawerCloseButton color="white" />
                <DrawerBody>
                    <Nav
                        fontSize="1.2rem"
                        alignItems="center"
                        m="1rem 0"
                        direction="column"
                        onClick={onClose}
                    />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};
