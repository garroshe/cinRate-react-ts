module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react", "react-hooks", "react-refresh", "prettier"],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "react/prop-types": "off",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
};
