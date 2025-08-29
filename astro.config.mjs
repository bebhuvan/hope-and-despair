// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://hope-and-despair.r-bhuvanesh2007.workers.dev',
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
    platformProxy: {
      enabled: true
    }
  }),
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
    assets: '_astro'
  }
});
