import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

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

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './',
    plugins: [react(), tailwindcss(), rewriteV1Folder()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-core';
              }
              if (id.includes('motion') || id.includes('framer-motion')) {
                return 'motion';
              }
              if (id.includes('lucide-react') || id.includes('react-icons')) {
                return 'icons';
              }
              if (id.includes('mixpanel-browser')) {
                return 'mixpanel';
              }
              return 'vendor-core';
            }
          }
        }
      }
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€› file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
