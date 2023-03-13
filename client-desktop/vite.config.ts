import { rmSync } from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'vite-electron-plugin';
import { customStart, loadViteEnv } from 'vite-electron-plugin/plugin';
import renderer from 'vite-plugin-electron-renderer';
import pkg from './package.json';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    rmSync('dist-electron', { recursive: true, force: true });

    const sourcemap = command === 'serve' || !!process.env.VSCODE_DEBUG;

    return {
        resolve: {
            alias: [
                {
                    find: '@assets',
                    replacement: path.resolve(__dirname, './src/assets')
                },
                {
                    find: '@components',
                    replacement: path.resolve(__dirname, './src/components')
                },
                {
                    find: '@hooks',
                    replacement: path.resolve(__dirname, './src/hooks')
                },
                {
                    find: '@pages',
                    replacement: path.resolve(__dirname, './src/pages')
                },
                {
                    find: '@store',
                    replacement: path.resolve(__dirname, './src/store')
                },
                {
                    find: '@services',
                    replacement: path.resolve(__dirname, './src/services')
                },
                {
                    find: '@styles',
                    replacement: path.resolve(__dirname, './src/styles')
                },
                {
                    find: '@utils',
                    replacement: path.resolve(__dirname, './src/utils')
                },
                {
                    find: '@theme',
                    replacement: path.resolve(__dirname, './src/theme')
                },
                {
                    find: '@data',
                    replacement: path.resolve(__dirname, './src/data')
                }
            ]
        },
        plugins: [
            react(),
            vanillaExtractPlugin(),
            tsconfigPaths(),
            electron({
                include: ['electron'],
                transformOptions: {
                    sourcemap
                },
                plugins: [
                    ...(!!process.env.VSCODE_DEBUG
                        ? [
                              // Will start Electron via VSCode Debug
                              customStart(() =>
                                  console.log(
                                      /* For `.vscode/.debug.script.mjs` */ '[startup] Electron App'
                                  )
                              )
                          ]
                        : []),
                    // Allow use `import.meta.env.VITE_SOME_KEY` in Electron-Main
                    loadViteEnv()
                ]
            }),
            // Use Node.js API in the Renderer-process
            renderer({
                nodeIntegration: true
            })
        ],
        server: !!process.env.VSCODE_DEBUG
            ? (() => {
                  const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL);
                  return {
                      host: url.hostname,
                      port: +url.port
                  };
              })()
            : undefined,
        clearScreen: false
    };
});
