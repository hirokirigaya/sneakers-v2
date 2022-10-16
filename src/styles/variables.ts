const theme = {
  colors: {
    default: {
      white: "#fff",
      black: "#000",
   },
   text: {
    primary: "#1b1b1b",
    secondary: "#D71920",
    tertiary: "#b6bcc8",
   },
   gray: {
    100: "#f7f8fd",
    500: "#b6bcc8",
    900: "#565555",
   },
   red: {
    500: "#D71920",
  },
  blue: {
    500: "#1472ff",
  }
  },
  breakPoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  buttons: {
    primary: {
      backgroundColor: '#D71920',
      color: '#fff',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        filter: 'brightness(.9)'
      }
    },
    secondary: {
      backgroundColor: '#1b1b1b',
      color: '#fff',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        filter: 'brightness(.9)'
      }
    },
    tertiary: {
      backgroundColor: 'transparent',
      color: '#1b1b1b',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        filter: 'brightness(.9)'
      }
    },
  }
}

export { theme };