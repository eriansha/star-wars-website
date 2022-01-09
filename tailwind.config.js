module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/***/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      blue: '#1F36FF',
      purple: '#a800ff',
      pink: '#FF1FA6',
      orange: '#FF781F',
      green: '#A6FF1F',
      yellow: '#FFE81F',
      black: '#000000',
      white: '#ffffff',
      'gray-dark': '#404040',
      gray: '#8492a6',
      'gray-light': '#d3dce6'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  }
}
