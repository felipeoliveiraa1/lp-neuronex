import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lp-neuronex.vercel.app',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
