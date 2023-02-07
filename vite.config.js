import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
// import tailwindcss from "tailwindcss";
// import postcss from "./postcss.config.cjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  // plugins: [react(), tailwindcss()],
});

// css: {
// postcss,
// },
