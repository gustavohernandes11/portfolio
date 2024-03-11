import { css } from "styled-components";

type DirectionOptions = "row" | "column";

export const Mixins = {
    flexCenter: (direction: DirectionOptions = "row") => css`
        display: flex;
        align-items: center;
        justify-content: center;
        direction: ${direction};
    `,
};
