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
                dosis: "Dosis"
            }
        }
    },
    plugins: []
}
