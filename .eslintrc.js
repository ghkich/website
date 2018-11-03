module.exports = {
  plugins: ["react", "jsx-a11y", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended"
  ],
  settings: {
    react: {
      version: "16.7"
    },
    propWrapperFunctions: ["forbidExtraProps"]
  },
  rules: {
    "no-unused-expressions": [2, { allowTaggedTemplates: true }],
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": [
      2,
      {
        ignorePureComponents: true
      }
    ],
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": [
      0,
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    semi: [2, "never"]
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    amd: true
  },
  globals: {
    graphql: true
  }
}
