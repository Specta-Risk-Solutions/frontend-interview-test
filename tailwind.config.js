/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "spin-fast": "spin .3s linear infinite"
            },
            colors: {
                "dim": "#6b7280",
                "d-dim": "#d1d5db"
            },
        },
    },
    daisyui: {
        themes: [{
            light: {
                "base-100": "#fff",
                "base-200": "#f0f2f4",
                "base-content": "#000",
                "primary": "#e22e2e",
                "primary-content": "#fff",
                "secondary": "#E2A421",
                "secondary-content": "#000"
            },
            dark: {
                "base-100": "#1e1e1e",
                "base-200": "#2a2a2a",
                "base-300": "#171717",
                "base-content": "#fff",
                "primary": "#00ecff",
                "primary-content": "#fff",
                "secondary": "#E2A421",
                "secondary-content": "#fff",
            },
        }]
    },
    plugins: [
        require("tailwind-scrollbar")({ nocompatible: true }),
        require("daisyui")
    ],
}

