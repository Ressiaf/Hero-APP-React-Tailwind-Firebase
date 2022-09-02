const withMT =  require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'venom-pattern': "url('https://raw.githubusercontent.com/Ressiaf/wiki-geeks/655ab32f34aa07bce8009762c30e1014d24e47d3/dist/assets/images/Venombackground.png')",
        'dc-pattern': "url('./dist/assets/images/DCbackground.png')"
      }
    },
  },
  plugins: [ ],
  
} )