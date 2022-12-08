import { Container, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { Title } from "components/Title";
import { Wrapper } from "components/Wrapper";
import { Copy, Check } from "@styled-icons/feather";
import { useClipboard } from "@chakra-ui/react";
import { BackgroundImageSVG } from "../assets/BackgroundImageSVG";

export const ContactSection = () => {
    const { onCopy, hasCopied } = useClipboard(
        "gustavo.hernandes.s11@gmail.com"
    );
    return (
        <>
            <Wrapper
                id="contact"
                flexDirection="column"
                paddingInline={0}
                bgImage={BackgroundImageSVG}
                padding={["3rem", "3rem 6rem", null, "4rem 12rem"]}
            >
                <Title>CONTATO</Title>
                <Flex
                    maxW="46rem"
                    marginInline="auto"
                    direction="column"
                    align="center"
                    padding={[
                        "0rem 2rem 4rem 2rem",
                        "0rem 2rem 4rem 2rem",
                        "0rem 0rem 4rem 0rem",
                        "0rem 0rem 4rem 0rem",
                    ]}
                >
                    <Text textAlign="center">
                        Você pode trocar uma ideia comigo por email ou qualquer
                        uma das minhas redes sociais.
                    </Text>
                    <Stack
                        direction="row"
                        wrap="nowrap"
                        justify="center"
                        border="1px solid gray"
                        width="fit-content"
                        borderRadius={6}
                        padding="1rem"
                        mt="1rem"
                    >
                        <Text>
                            gustavo.hernandes.s11@gmail.com
                            <IconButton
                                width="min-content"
                                ml="1rem"
                                colorScheme="blue"
                                variant="ghost"
                                aria-label={"copy"}
                                onClick={onCopy}
                                _hover={{
                                    bgColor: "transparent",
                                }}
                            >
                                {hasCopied ? (
                                    <Check size={20} />
                                ) : (
                                    <Copy size={20} />
                                )}
                            </IconButton>
                        </Text>
                    </Stack>
                </Flex>
            </Wrapper>
        </>
    );
};
