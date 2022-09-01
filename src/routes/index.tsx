import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export { MyRoutes }
