import { Flex } from "@chakra-ui/react";
import React from "react";

export const Wrapper = ({ children, justifyContent, ...props }: any) => {
    return (
        <Flex
            justifyContent={justifyContent}
            as="section"
            width="100%"
            maxW="100vw"
            padding={["2rem 3rem", "2rem 6rem", null, "2rem 12rem"]}
            bgColor="custom.black"
            color="custom.light"
            {...props}
        >
            {children}
        </Flex>
    );
};
