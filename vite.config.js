import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    define: {
        'process.env': {
            API_URL: JSON.stringify(process.env.API_URL),
        },
    },
});
