
module.exports = {
    root: true,
    overrides: [
        {
          files: ['src/**/*.ts'],
          parserOptions: {
            project: ['./tsconfig.json'],
          },
        }
      ],
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
  };
