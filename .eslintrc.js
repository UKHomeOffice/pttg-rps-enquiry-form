module.exports = {
    "env": {
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2018
    },
    "rules": {
        "strict": [1, "global"],
        "eol-last": 1,
        "prefer-const": 1,
        "prefer-spread": 1,
        "no-multiple-empty-lines": [
            "error", {
                "max": 2,
                "maxBOF": 1
            }
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-multi-spaces": [
            "error"
        ],
        "no-trailing-spaces": [
            "error"
        ]
    }
};