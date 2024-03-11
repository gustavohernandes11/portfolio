import { render } from "@testing-library/react";
import { Theme } from "../theme/ThemeProvider";
import { GlobalContextProvider } from "../contexts/globalContext/GlobalContextProvider";

export const customRender = (ui) => {
    return render(
        <GlobalContextProvider>
            <Theme>{ui}</Theme>
        </GlobalContextProvider>
    );
};
export * from "@testing-library/react";

export { customRender as render };
