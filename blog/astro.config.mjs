import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  outDir: '../dist/blog',
  base: '/blog/',
  integrations: [react()],
});
