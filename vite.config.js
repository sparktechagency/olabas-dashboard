import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "10.0.60.210",
    port: 4001,
    // host: "tanvir4002.binarybards.online",
    // port: 3030,
  },
});
