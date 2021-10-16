
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:jest/recommended',
    ],
    "rules": {
      "jest/expect-expect": [
        "error",
        {
          "assertFunctionNames": [
            "expect",
            "request.**.expect"
          ]
        }
      ],
      "jest/no-done-callback": ["warn"]
    }
  };
