import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';

const rewriteV1Folder = () => ({
  name: 'rewrite-v1-folder',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      if (req.url === '/v1') {
        res.statusCode = 301;
        res.setHeader('Location', '/v1/');
        res.end();
        return;
      }
      if (req.url === '/v1/') {
        req.url = '/v1/index.html';
      }
      next();
    });
  }
});

const inlineCss = (): Plugin => ({
  name: 'inline-css',
  enforce: 'post',
  apply: 'build',
  generateBundle(_options, bundle) {
    const cssFiles = Object.keys(bundle).filter((f) => f.endsWith('.css'));
    const htmlFiles = Object.keys(bundle).filter((f) => f.endsWith('.html'));
    if (!cssFiles.length || !htmlFiles.length) return;

    const css = cssFiles
      .map((f) => String((bundle[f] as { source: unknown }).source))
      .join('\n');
    for (const f of cssFiles) delete bundle[f];

    for (const f of htmlFiles) {
      const asset = bundle[f] as { source: string };
      asset.source = asset.source
        .replace(/<link[^>]*rel="stylesheet"[^>]*>/g, '')
        .replace('</head>', `<style>${css}</style></head>`);
    }
  },
});

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), rewriteV1Folder(), inlineCss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    esbuild: {
      legalComments: 'none',
    },
    build: {
      target: 'es2022',
      cssMinify: 'lightningcss',
      modulePreload: { polyfill: false },
      reportCompressedSize: true,
      assetsInlineLimit: 2048,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('mixpanel-browser')) return 'analytics';
              if (id.includes('motion') || id.includes('framer-motion')) return 'motion';
              return 'vendor';
            }
          },
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
