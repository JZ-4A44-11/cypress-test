import { FC, ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './about'
import Home from './home'

const Router: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
