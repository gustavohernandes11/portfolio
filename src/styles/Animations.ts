import { keyframes } from "styled-components";

export const Animations = {
    pulse: keyframes`
    5% {
        transform: scale(1);
    }
    15% {
        transform: scale(1.1);
    }
    25% {
        transform: scale(0.9);
    }
    35% {
        transform: scale(1.1);
    }
    45% {
        transform: scale(1);
    }
`,
};
