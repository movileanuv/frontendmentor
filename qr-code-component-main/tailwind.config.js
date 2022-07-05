/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: {
            outfit: ['Outfit', 'sans-serif'],
        },
        extend: {
            colors: {
                darkBlue: 'hsl(218, 44%, 22%)',
                grayishBlue: 'hsl(220, 15%, 55%)',
                lightGray: 'hsl(212, 45%, 89%)',
                white: 'hsl(0, 0%, 100%)'
            }
        }
    },
    plugins: [],
}
