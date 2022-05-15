module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors:{
        hero:'#3DBCFB',
        footer:'#92D1C2',
        footerText:'hsl(167, 40%, 24%)'
      },
      fontFamily: {
        'Barlow': ['Barlow', 'sans-serif'],
        'Fraunces' : ['Fraunces', 'serif']
    },
    textUnderlineOffset: {
      3: '-3px',
    },
  },
  plugins: [],
}
}