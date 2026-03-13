
import { useState } from 'react'
import './App.css'
import Header from './pages/header/header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import NoMatch from './pages/noMatch/NoMatch'
import PostUser from './pages/employee/PostUser.jsx'
import UpdateUser from './pages/employee/UpdateUser.jsx'
import Home from './pages/home/Home.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/employee' element={<PostUser/>} />
        <Route path='/employee/:id' element={<UpdateUser/>} />
        <Route path='*' element={<NoMatch/>} />
      </Routes>
    </>
  )
}

export default App
