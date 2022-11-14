import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Create from '../pages/create'

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  )
}
