import { Container, IconButton, Stack, Text } from "@chakra-ui/react";
import { Title } from "components/Title";
import { Wrapper } from "components/Wrapper";
import { Copy, Check } from "@styled-icons/feather";
import { useClipboard } from "@chakra-ui/react";

export const ContactSection = () => {
    const { onCopy, hasCopied } = useClipboard(
        "gustavo.hernandes.s11@gmail.com"
    );
    return (
        <>
            <Wrapper id="contact" flexDirection="column" paddingInline={0}>
                <Title>CONTATO</Title>
                <Container maxW="46rem" align="center">
                    <Text>
                        Você pode trocar uma ideia comigo pelo email ou qualquer
                        uma de minhas redes sociais.
                    </Text>
                    <Stack direction="row" justify="center" mt="1rem">
                        <Text>
                            gustavo.hernandes.s11@gmail.com
                            <IconButton
                                width="min-content"
                                ml="1rem"
                                colorScheme="blue"
                                aria-label={"copy"}
                                onClick={onCopy}
                            >
                                {hasCopied ? (
                                    <Check size={20} />
                                ) : (
                                    <Copy size={20} />
                                )}
                            </IconButton>
                        </Text>
                    </Stack>
                </Container>
            </Wrapper>
        </>
    );
};
