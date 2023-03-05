import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin(),
        tsconfigPaths(),
        VitePWA({ registerType: 'autoUpdate' })
    ],
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
    }
});
