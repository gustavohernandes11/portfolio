import { Flex } from "@chakra-ui/react";
import React from "react";

export const Wrapper = ({ children, justifyContent, ...props }: any) => {
    return (
        <Flex
            justifyContent={justifyContent}
            as="section"
            width="100%"
            maxW="100vw"
            padding={["3rem", "3rem 6rem", null, "4rem 12rem"]}
            color="custom.light"
            {...props}
        >
            {children}
        </Flex>
    );
};
