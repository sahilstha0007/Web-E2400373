<<<<<<< HEAD
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import About from './pages/About'
import Home from './pages/Home'
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Courses from './pages/Courses';
>>>>>>> ddf4ef7d6b4329fe286161b8b01c0ad80fe24bbb

function App() {
  const location = useLocation();
  const noNavbarRoutes = ['/login', "/"];

  return (
<<<<<<< HEAD
    <>
      {!noNavbarRoutes.includes(location.pathname) && (
        <div className='sticky top-0 z-50 bg-[#AF8F6F]'>
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
=======
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> ddf4ef7d6b4329fe286161b8b01c0ad80fe24bbb
