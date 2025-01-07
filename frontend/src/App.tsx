//import './index.css'
import { Route, Routes } from 'react-router-dom'
import Login from './app/login/page.tsx'
import Home from './pages/home.tsx'


function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
