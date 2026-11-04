import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://khedar.io',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (p) => !p.includes('404') })],
});
