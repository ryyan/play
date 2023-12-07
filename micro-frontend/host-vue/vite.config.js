import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import veauryVitePlugins from "veaury/vite/index.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    veauryVitePlugins({
      type: "vue",
    }),
    federation({
      name: "host_vue",
      remotes: {
        remoteReact: "http://localhost:5001/assets/remoteEntry.js",
        remoteVue: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "vue"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
