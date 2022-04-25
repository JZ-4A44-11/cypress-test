import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'

ReactDom.createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <>The Show Must Go On</>
  </StrictMode>,
)
