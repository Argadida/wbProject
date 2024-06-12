/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        cl1: '#7788E1',
      },
      backgroundImage: {
        bg1: "url('../gambar/img2.jpg')",
        bg2: "url('../gambar/logo1.png')",
        bg3: "url('../gambar/logo2.png')",
        bg4: "url('../gambar/img6.png')",
      },
      fontFamily: {
        font1: ['poppins', 'sans-serif']
      },
    },
  },

  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  
  plugins: [
    require('daisyui'),
  ],
  
  darkMode: "class"
}
