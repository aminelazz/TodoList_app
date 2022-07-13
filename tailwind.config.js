/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary_color: "#00B295",
                second_color: "#C9DAEA",
                third_color: "#191516"
            },
            fontFamily: {
                dosis_bold: ["Dosis Bold", "sans-serif"],
                dosis: ["Dosis Regular", "sans-serif"],
                titillium_web: ["Titillium Web", "sans-serif"]
            },
            backgroundImage: {
                bg_light: "url('../public/Meteor.svg')",
                bg_dark: "url('../public/Meteor_dark.svg')"
            }
        }
    },
    plugins: []
}
