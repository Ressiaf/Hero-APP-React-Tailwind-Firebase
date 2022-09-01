const withMT =  require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'venom-pattern': "url('./dist/assets/images/Venombackground.png')",
        'dc-pattern': "url('./dist/assets/images/DCbackground.png')"
      }
    },
  },
  plugins: [ ],
  
} )