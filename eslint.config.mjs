import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
  { ignores: ['build/**', 'tmp/**', 'coverage/**', '.vitest/**'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
  {
    ...vitest.configs.recommended,
    files: ['src/**/*.test.ts'],
  },
  eslintConfigPrettier,
];
