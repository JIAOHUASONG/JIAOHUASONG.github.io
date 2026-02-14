import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 你的网站域名
  site: 'https://JIAOHUASONG.github.io',
  // 关键：部署到根目录，所以base必须为空字符串
  base: '',
  integrations: [sitemap()],
});