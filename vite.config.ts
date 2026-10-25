import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Конфигурация совместима с GitHub Pages для любого имени репозитория (base: './')
// Если потребуется жестко задать имя репозитория, можно заменить './' на '/REPO_NAME/'
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
