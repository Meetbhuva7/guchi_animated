/** @type {import('tailwindcss').Config} */
export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/content-image.jpg')",
        
    },
    colors:{
      'yelogren': '#CDEA68',
    },
      scale: {
        'minscale': '0.75',
      },
  },
  plugins: [],
}
}
