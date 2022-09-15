const withMT =  require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'venom-pattern': "url('https://i.snipboard.io/S1FiHq.jpg')",
        'dc-pattern': "url('https://i.snipboard.io/EpP7cl.jpg')"
      }
    },
  },
} )