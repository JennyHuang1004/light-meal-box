/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4CAF50', // Fresh Green
                secondary: '#8BC34A', // Light Green
                accent: '#FFC107', // Sunny Yellow
                dark: '#333333',
                light: '#F9F9F9',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
