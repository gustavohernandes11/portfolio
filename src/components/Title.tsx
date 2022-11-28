import { Heading } from "@chakra-ui/react";
import React from "react";

type TitleProps = {
    children: any;
};

export const Title = ({ children, ...props }: TitleProps) => {
    return (
        <Heading
            {...props}
            position="relative"
            fontSize="2rem"
            marginInline="auto"
            textAlign="center"
            mb="2rem"
            _before={{
                content: `""`,
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translate(-150%, -45%)",
                bgColor: "custom.blue",
                height: "20px",
                width: "20px",
            }}
        >
            {children}
        </Heading>
    );
};
