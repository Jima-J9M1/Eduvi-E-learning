/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes:{
        'trans-right':{
          '0% , 100%':{transform:'translateX(10px)'},
          '50%':{transform: 'translateX(0)'}
        }
      },
      animation:{
        'trans-right': 'trans-right 1.5s ease-in-out infinite'
      },
      spacing: {
        "card-width": "386px",
        "card-height": "418px",
        "rating-width": "63px",
        "rating-height": "25px",
        "image-height": "236px",
        "quote-width": "700px",
        "quote-height": "135px",
        "cat-align": "1008px",
        "cat-pos": "10%",
        "catb-pos": "5%",
        "rating-bottom": "40%",
        "b-width": "1300px",
      },
      colors: {
        primary: "#9C4DF4",
        secondary: "#E93E30",
        teritiary: "#FFC107",
        apply: "#4ade80",
        "testimonial-card": "#EEF4FA",
        "card-bg": "white",
        "rating-color": "#1C1E53",
        "desc-color": "#282938",
        "icon-color": "#000000",
        "quote-title-color": " #0A033C",
        "quote-color": "#5D5A6F",
        "list-back": "#fff",
      },
      width:{
        "Apply-width": "1131px",
      },
      fontSize:{
        "Apply-font-size": "100px",
      }
    },
  },
  plugins: [],
};
