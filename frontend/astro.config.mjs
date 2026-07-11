import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // TODO: replace with the confirmed production domain before the first deploy —
  // this value feeds canonical tags, sitemap <loc> entries, and OG "url" everywhere.
  site: "https://www.example.com",
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
