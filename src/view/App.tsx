import { FC, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import nordTheme from './themes/nord.theme'
import Router from './pages/index.routes'
import GlobalStyled from './styled.styled'

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={nordTheme}>
      <Router />
      <GlobalStyled />
    </ThemeProvider>
  )
}
export default App
