import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import App from './view/App'

ReactDom.createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
