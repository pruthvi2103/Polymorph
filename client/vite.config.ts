import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions, ManifestOptions } from 'vite-plugin-pwa';

import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const pwaOptions: Partial<VitePWAOptions> = {
    mode: 'development',
    base: '/',
    includeAssets: ['favicon.svg'],
    manifest: {
        name: 'Polymorph Image',
        short_name: 'Polymorph',
        theme_color: '#ffffff',
        icons: [
            {
                src: 'pwa-192x192.png', // <== don't add slash, for testing
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/pwa-512x512.png', // <== don't remove slash, for testing
                sizes: '512x512',
                type: 'image/png'
            },
            {
                src: 'pwa-512x512.png', // <== don't add slash, for testing
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable'
            }
        ]
    },
    devOptions: {
        enabled: process.env.SW_DEV === 'true',
        /* when using generateSW the PWA plugin will switch to classic */
        type: 'module',
        navigateFallback: 'index.html'
    }
};

const replaceOptions = { __DATE__: new Date().toISOString() };
const claims = process.env.CLAIMS === 'true';
const reload = process.env.RELOAD_SW === 'true';
const selfDestroying = process.env.SW_DESTROY === 'true';

if (process.env.SW === 'true') {
    pwaOptions.srcDir = 'src';
    pwaOptions.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts';
    pwaOptions.strategies = 'injectManifest';
    (pwaOptions.manifest as Partial<ManifestOptions>).name =
        'PWA Inject Manifest';
    (pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'PWA Inject';
}

if (claims) pwaOptions.registerType = 'autoUpdate';

if (reload) {
    // @ts-expect-error just ignore
    replaceOptions.__RELOAD_SW__ = 'true';
}

if (selfDestroying) pwaOptions.selfDestroying = selfDestroying;
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin(),
        tsconfigPaths(),
        VitePWA(pwaOptions)
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
