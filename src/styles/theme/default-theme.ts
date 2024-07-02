import { createTokens } from "tamagui";

const tokens = createTokens({
    color: {
      pinkDark: '#610c62',
      pinkLight: '#f17efc',
      colorButton: '#e5fc0a'
    },
    space: { },
    size: { },
    radius: { },
    zIndex: { }
  })
  

const voltThemes =  {
    dark: {
      background: tokens.color.pinkDark,
      color: '#fff',
    },
    light: {
      background: tokens.color.pinkDark,
      color: '#000',
    }
}

export default voltThemes