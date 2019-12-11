module.exports = {
    'globals': {
        '_': true,
        'logger': true,
        'FunctionalError': true,
        'FE': true,
        'CustomError': true,
        'CE': true,
        'zealit': true,
        'NamedError': true,
        '__APINAME__': true,
        'postMessage': true,
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["airbnb-base", "plugin:vue/recommended"],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["vue"],
    "rules": {
        "semi": [
            "warn",
            "never"
        ],
        "global-require": "warn",
        "no-prototype-builtins": "warn",
        "no-shadow": "warn",
        "no-cond-assign": ["warn", "always"],
        "no-undef": ["error", { "typeof": true }],
        "radix": "warn",
        "no-restricted-syntax": [
            "warn",
            {
                "selector": "ForInStatement",
                "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
            },
            {
                "selector": "ForOfStatement",
                "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
            },
            {
                "selector": "LabeledStatement",
                "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
            },
            {
                "selector": "WithStatement",
                "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
            }
        ],
        "strict": "warn",
        "lines-around-directive": "warn",
        "indent": [
            "warn",
            4,
            {
                "MemberExpression": 0,
                "SwitchCase": 1
            }
        ],
        "newline-per-chained-call": "off",
        "comma-dangle": [
            "warn",
            "always-multiline"
        ],
        "import/no-extraneous-dependencies": "off",
        "import/newline-after-import": "off",
        "import/no-dynamic-require": "off",
        "camelcase": "off",
        "func-names": "off",
        "arrow-parens": [
            "warn",
            "always"
        ],
        "prefer-const": "warn",
        "quotes": [
            "warn",
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "max-len": [
            "warn",
            {
                "code": 200
            }
        ],
        "arrow-body-style": "off",
        "new-cap": "warn",
        "no-param-reassign": [
            "warn",
            { "props": false }
        ],
        "no-unused-vars": [
            "warn",
            { "args": "none" }
        ],
        "consistent-return": "off",
        "no-loop-func": "warn",
        "default-case": "warn",
        "no-plusplus": [
            "warn",
            { "allowForLoopAfterthoughts": true }
        ],
        "no-underscore-dangle": "off",
        "no-extend-native": "off",
        "no-restricted-properties": [
            "warn",
            {
                "object": "arguments",
                "property": "callee",
                "message": "arguments.callee is deprecated"
            },
            {
                "property": "__defineGetter__",
                "message": "Please use Object.defineProperty instead."
            },
            {
                "property": "__defineSetter__",
                "message": "Please use Object.defineProperty instead."
            }
        ],
        "brace-style": "off",
        "quote-props": [
            "warn",
            "consistent-as-needed"
        ],
        "no-multiple-empty-lines": [
            "warn",
            {
                "max": 3,
                "maxEOF": 0,
                "maxBOF": 0
            }
        ],
        "no-use-before-define": [
            "error",
            {
                "functions": false,
                "classes": true,
                "variables": true
            }
        ],
        "one-var": [
            "warn",
            "never"
        ],
        /* --- Disable rules temporally to fix everything for website --- */
        "import/no-webpack-loader-syntax": "warn",
        "import/no-unresolved": "warn",
        "import/prefer-default-export": "warn",
        "no-return-assign": "warn", // relicat coffeescript
        "class-methods-use-this": "warn",
        "no-mixed-operators": "warn",
        // "no-shadow": "warn",
        // "no-restricted-syntax": "warn",
        "no-confusing-arrow": "warn",
        "vars-on-top": "warn",
        "no-multi-assign": "warn",
        "import/first": "warn",
        "no-nested-ternary": "warn",
        "prefer-rest-params": "warn",
        "import/extensions": "warn",
        "no-empty": "warn",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

        // Allow to use require for webpack
        // "global-require": "error"
    }
};
