# TypeScript algorithms

A personal workspace for learning algorithms, data structures, and TypeScript. Each implementation is an independent module with tests that serve as runnable examples.

## Organization

Use one package and one shared toolchain. Group implementations by topic, with one algorithm per file and its test beside it:

```text
src/
  sorting/
    bubble-sort.ts
    bubble-sort.test.ts
    heap-sort.ts
    heap-sort.test.ts
    selection-sort.ts
    selection-sort.test.ts
vitest.config.ts
tsconfig.json
eslint.config.mjs
```

Add topic directories such as `searching`, `graphs`, or `data-structures` as needed. If an exercise grows to need several files, give it its own directory within the topic. Keep algorithm-specific helpers with the algorithm; extract shared utilities only when they are useful across implementations. Separate packages, per-algorithm TypeScript configurations, and a central entry point are unnecessary here.

### Is `__tests__` standard?

`__tests__` is a common convention, especially in Jest projects, but it is not a TypeScript requirement. `tests/` and colocated tests are also common. Vitest normally discovers tests by `.test.*` or `.spec.*` filenames; this repo explicitly uses `src/**/*.test.ts`. See the [Vitest testing guide](https://vitest.dev/guide/).

Colocation keeps each implementation and its examples together and avoids maintaining a mirrored test directory. The root `vitest.config.ts` applies to normal runs, watch mode, and coverage.

## Getting started

Use Bun 1.4.2 or newer. Bun provides the package manager, script runner, test runner, and production bundler for this project. Node.js is still supported for the TypeScript and ESLint tooling; the supported Node versions are specified in `package.json`.

```sh
bun install --frozen-lockfile
bun run check
```

Commit `bun.lock` when dependencies change so installations remain reproducible.

## Learning workflow

```sh
# Run every test once
bun run test

# Run just one algorithm's tests
bun run test -- src/sorting/bubble-sort.test.ts

# Watch one algorithm while editing
bun run test:watch -- src/sorting/bubble-sort.test.ts

# Check TypeScript as you edit
bun run typecheck:watch
```

Import implementations directly in tests:

```ts
import { expect, it } from 'vitest';
import { bubbleSort } from './bubble-sort';

it('sorts numbers', () => {
  expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
});
```

When adding an algorithm:

1. Add a descriptive, kebab-case `.ts` file under its topic and export the implementation.
2. Explain its approach, time/space complexity, assumptions, and whether it mutates its input.
3. Add a matching `.test.ts` file covering full results, empty and small inputs, duplicates, and relevant edge cases.
4. Run `bun run check` before committing.

## Commands

| Command                   | Purpose                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| `bun run build`           | Bundle every TypeScript file under `src/` into `build/` for Node.js                           |
| `bun run typecheck`       | Check implementations, tests, and Vitest configuration without emitting JavaScript            |
| `bun run typecheck:watch` | Continuously check TypeScript                                                                 |
| `bun run test`            | Run all tests once                                                                            |
| `bun run test:watch`      | Rerun affected tests while editing                                                            |
| `bun run test:coverage`   | Report implementation coverage, including untested files; write HTML to `coverage/index.html` |
| `bun run lint`            | Check code with ESLint                                                                        |
| `bun run format`          | Format source, configuration, and documentation                                               |
| `bun run format:check`    | Check formatting without changing files                                                       |
| `bun run check`           | Run type checking, linting, formatting checks, and tests                                      |

## Configuration choices

- The package is private to prevent accidental npm publication. All dependencies are development tools.
- Bun runs the project scripts and bundler; Vitest remains the test runner and coverage tool.
- TypeScript uses `strict` checking and an ES2022 baseline with Node types. Browser DOM globals are not enabled.
- `noEmit` makes TypeScript a checker; Vitest transforms and executes the tests. Vitest does not replace the separate type-checking step.
- ES modules and `moduleResolution: "Bundler"` match Vitest's Vite-based execution and allow extensionless relative imports. This setup is intended for running exercises through Vitest. A future compiled Node application would need its own build configuration and Node-compatible module resolution.
- Tests import Vitest functions explicitly; no global test types or runtime globals are injected.
- `bun run build` bundles every TypeScript file under `src/` for Node.js, including colocated tests.
- TypeScript is kept on the 6.0 line to stay within the installed `typescript-eslint` support range. Recheck compatibility when upgrading the compiler.

See the [TypeScript compiler options](https://www.typescriptlang.org/tsconfig/) and [typescript-eslint compatibility documentation](https://typescript-eslint.io/users/dependency-versions/) for details.

## Implemented algorithms

| Algorithm                                       | Time                           | Extra space | Behavior           |
| ----------------------------------------------- | ------------------------------ | ----------- | ------------------ |
| [Bubble sort](src/sorting/bubble-sort.ts)       | O(n²) average/worst, O(n) best | O(1)        | In place, stable   |
| [Selection sort](src/sorting/selection-sort.ts) | O(n²)                          | O(1)        | In place, unstable |
| [Heap sort](src/sorting/heap-sort.ts)           | O(n log n) average/worst       | O(1)        | In place, unstable |

All three return the original array and accept an optional comparator. The default comparator uses JavaScript's `<` and `>` operators; pass a comparator for objects or a custom ordering.

## License

[Apache-2.0](LICENSE)
