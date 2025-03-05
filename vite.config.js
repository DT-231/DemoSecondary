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
        allowedHosts: ["9be2-171-225-184-195.ngrok-free.app"],
    },
});
