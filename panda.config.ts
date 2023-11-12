import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  body: {
    backgroundColor: "gray.300",
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // using global css
  globalCss,

  // Where to look for your css declarations
  include: ["./components/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  //to reduce the size of the generated css
  minify: true,

  // The output directory for your css system
  outdir: "styled-system",
});
