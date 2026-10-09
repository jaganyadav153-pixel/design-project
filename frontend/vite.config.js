import { defineConfig } from 'vite';
export default defineConfig({
 server: { port: 5173, host: true, proxy: { '/api': 'http://localhost:8000' } },
 build: { outDir: 'dist', sourcemap: false },
 preview: { port: 4173 }
});
