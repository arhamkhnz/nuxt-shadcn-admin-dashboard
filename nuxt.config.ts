// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "shadcn-nuxt"],
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
  routeRules: {
    "/": { redirect: "/dashboard/default" },
    "/dashboard": { redirect: "/dashboard/default" },
  },
});
