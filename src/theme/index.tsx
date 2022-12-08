import { extendTheme } from "@chakra-ui/react";

const components = {
    Button: {
        defaultProps: {
            colorScheme: "yellow",
            borderRadius: 0,
            padding: "1rem 3rem",
        },
    },
    styles: {
        global: {
            scrollBehavior: "smooth",
            h1: {
                fontFamily: "'Ubuntu', sans-serif",
                color: "custom.light",
                fontSize: "3rem",
                margin: "0 2rem",
            },
            h2: {
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: "3rem",
                color: "custom.light",
                margin: "0 2rem",
            },
            h3: {
                fontFamily: "'Ubuntu', sans-serif",
                color: "custom.light",
                fontSize: "1.75rem",
            },
            h4: {
                fontFamily: "'Ubuntu', sans-serif",
                color: "custom.light",
                fontSize: "1.5rem",
            },
            h5: {
                fontFamily: "'Ubuntu', sans-serif",
                color: "custom.light",
                fontSize: "1.25rem",
            },
            h6: {
                fontFamily: "'Ubuntu', sans-serif",
                color: "custom.light",
                fontSize: "1rem",
            },
            P: {
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 600,
            },
            a: {
                color: "teal.500",
                _hover: {
                    textDecoration: "underline",
                },
            },
        },
    },
};
const colors = {
    custom: {
        black: "#1E1E1E",
        darkGray: "#222222",
        mediumGray: "#393939",
        lightGray: "#8C8989",
        green: "#51A04F",
        blue: "#7e31d6",
        lightBlue: "#a691f5",
        light: "#FFFFFF",
    },
};

export const theme = extendTheme({ colors, components });
