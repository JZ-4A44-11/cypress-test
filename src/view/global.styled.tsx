import { createGlobalStyle } from 'styled-components'
import ITheme from './themes/type'

const GlobalStyled = createGlobalStyle<{ theme: ITheme }>`
  @font-face {
    font-family: Ubuntu;
    src: url('static/fonts/Ubuntu Nerd Font.ttf') format('truetype');
    font-display: fallback;
  } 

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family:  Ubuntu -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fg}
  }
`
export default GlobalStyled
