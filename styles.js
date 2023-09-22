// Global styles in this file

import { StyleSheet } from 'react-native';

export const globalVars ={
    colors: {
        danger: '#fb5151',
        dark: 'hsl(254, 30%, 17%)',
        light: 'hsl(252, 30%, 95%)',
        white: 'hsl(252, 30%, 100%)',
        gray: 'hsl(252, 15%, 65%)',
        primary: 'hsl(252, 75%, 60%)',
        secondary: 'hsl(252, 100%, 90%)',
       success: 'hsl(120, 95%, 65%)',
        black: 'hsl(252, 95%, 10%)',
    }
}

export const globalStyles = StyleSheet.create({
    txt: {
      color: 'white',
    },
    body: {
        color: globalVars.colors.dark,
        backgroundColor: globalVars.colors.light,
        fontFamily: 'Poppins',
    },
    btn: {
      backgroundColor: globalVars.colors.danger,
      width: 100,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,

    },
  })

// export default globalVars;