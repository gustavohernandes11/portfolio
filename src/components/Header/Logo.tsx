import { Text, Heading } from "@chakra-ui/react";

export const Logo = () => {
    return (
        <Heading fontSize="1.1rem" fontWeight={500} fontFamily="Ubuntu">
            G
            <Text
                fontSize="2rem"
                lineHeight={0}
                display="inline-block"
                color="custom.blue"
            >
                _
            </Text>
            Hernandes
        </Heading>
    );
};
