import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './view/App'

ReactDom.createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
