/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:'#212529',
      },
      fontFamily:{
        yg:["Yellow_Ginger"],
        ds:["Dancing_script"],
        pr:["Poppins-Regular"]
      },
    },
  },
  plugins: [],
}

