import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cookieconsent from "@jop-software/astro-cookieconsent";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    sitemap(),
    /*cookieconsent({
        guiOptions: {
            consentModal: {
                layout: 'cloud',
                position: 'bottom center',
                equalWeightButtons: true,
                flipButtons: false,
            },
            preferencesModal: {
                layout: "box",
                position: "right",
                equalWeightButtons: true,
                flipButtons: false,
            },
        },
    }),*/
  ],
  site: 'https://domin.es',
});