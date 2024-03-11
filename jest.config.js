const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    setupFilesAfterEnv: ["./jest.setup.js"],
    moduleDirectories: ["node_modules", "./"],
    testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);

module.exports = {
    collectCoverage: true,
    coverageProvider: "v8",
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/src/components/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts",

        "!<rootDir>/*.setup.js",
        "!<rootDir>/.prettierrc.js",
        "!<rootDir>/pages/**",

        "!**/node_modules/**",
        "!<rootDir>/out/**",
        "!<rootDir>/.next/**",
        "!<rootDir>/*.config.js",
        "!<rootDir>/coverage/**",
    ],
    moduleNameMapper: {
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

        "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

        "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i": `<rootDir>/__mocks__/fileMock.js`,

        "^@/components/(.*)$": "<rootDir>/components/$1",
    },
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
};
