// eslint-disable-next-line import/extensions
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
// import { pathResolve } from './scripts/utils';

export default defineConfig({
    plugins: [tsconfigPaths()],
    resolve: {
        alias: [
            // { find: /^zustand$/, replacement: './src/index.ts' },
            // { find: /^zustand(.*)$/, replacement: './src/$1.ts' },
            // // '@': pathResolve('src'),
            // { find: '@', replacement: './src' },
        ],
    },

    test: {
        pool: 'forks',
    },
});
