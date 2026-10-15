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
    rules: {},
  },
  {
    ...vitest.configs.recommended,
    files: ['src/**/*.test.ts'],
  },
  // Legacy CommonJS modules. ESLint treats .js as an ES module by default, so
  // `exports` reads as an undefined global without this. Scoped to .cjs and the
  // one legacy learnings file, because sibling .js files are real ES modules.
  {
    files: ['**/*.cjs', 'src/learnings/legacy-math.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        exports: 'writable',
        module: 'writable',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },
  eslintConfigPrettier,
];
