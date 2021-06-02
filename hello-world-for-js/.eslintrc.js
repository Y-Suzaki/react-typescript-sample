module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        // "tsconfigRootDir": "__dirname"
    },
    "plugins": [
        "react",
        "import"
    ],
    "rules": {
        "lines-between-class-members": [
            "error",
            "always",
            {
                "exceptAfterSingleLine": true,
            },
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return",
            },
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
            },
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [".jsx", ".js"],
            },
        ],
        "react/jsx-props-no-spreading": [
            "error",
            {
                "html": "enforce",
                "custom": "enforce",
                "explicitSpread": "ignore",
            },
        ],
        "react/react-in-jsx-scope": "off",
    }
};
