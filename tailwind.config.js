/** @type={import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            colors:{
                themeyellow: '#FBBF24',
                themepurple: '#8B5CF6',
            },
        },
    },
    plugins: [],
    }