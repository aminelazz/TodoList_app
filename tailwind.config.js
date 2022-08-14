/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#00B295",
                primary_dark: "#005c4d",
                secondary: "#C9DAEA",
                secondary_dark: "#233549",
                third_color: "#191516"
            },
            fontFamily: {
                dosis_bold: ["Dosis Bold", "sans-serif"],
                dosis: ["Dosis Regular", "sans-serif"],
                titillium_web: ["Titillium Web", "sans-serif"]
            },
            backgroundImage: {
                bg_light: "url('/public/Meteor.svg')",
                bg_dark: "url('/public/Meteor_dark.svg')"
            }
        }
    },
    plugins: []
}
