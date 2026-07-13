import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.operationcost.com",
  output: "static",
  adapter: vercel(),
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/admin"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/treatment/[slug]": "/treatments/[slug]",
  },
});
