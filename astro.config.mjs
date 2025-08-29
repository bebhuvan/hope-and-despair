// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://hopeanddespair.world',
  output: 'server',
  adapter: cloudflare(),
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
    assets: '_astro'
  }
});
