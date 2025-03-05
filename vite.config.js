import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "src"),
        },
    },
    server: {
        allowedHosts: ["06c2-42-117-42-70.ngrok-free.app"],
    },
});
