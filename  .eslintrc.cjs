module.exports = {
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'react-compiler'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Add your custom rules here
    },
  };