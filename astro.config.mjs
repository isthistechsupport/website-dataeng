import i18n from "astro-i18n";
import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [i18n(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});