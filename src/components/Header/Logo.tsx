import { Text, Heading } from "@chakra-ui/react";

export const Logo = () => {
    return (
        <Heading fontSize="2rem" fontFamily="Ubuntu" color="custom.light">
            G
            <Text
                lineHeight={0}
                fontWeight={700}
                display="inline-block"
                color="custom.lightBlue"
            >
                H
            </Text>
        </Heading>
    );
};
