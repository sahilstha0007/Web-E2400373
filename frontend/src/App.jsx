import { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'


function App() {
  return (
    <Router>
      <Navbar className=" sticky top-0 left-0 bg-white"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
    </Router>
  )
}

export default App
