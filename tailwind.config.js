/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        'card-width': '386px',
        'card-height': '418px',        
        'rating-width' : '63px',
        'rating-height' : '25px',  
        'image-height' : '236px',  

      },
      colors: {
        "testimonial-card": "#EEF4FA",
        'card-bg' : 'white',
        'rating-color' : '#1C1E53',
        'desc-color' : '#282938',
        'icon-color' : '#000000',
      }
    },
  },
  plugins: [],
};
