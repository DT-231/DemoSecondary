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
        allowedHosts: ["357e-2405-4803-dd51-7060-d805-ddff-5975-20ef.ngrok-free.app"],
    },
});
