import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import About from './pages/About';
import Home from './pages/Home';
import Courses from './pages/Courses';

function AppContent() {
  const location = useLocation();
  const noNavbarRoutes = ['/login', "/"];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && (
        <div className='sticky top-0 z-50 bg-[#AF8F6F]'>
          <Navbar />
        </div>
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/auth" element={<AuthPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
}

function App() {
  return (
      <AppContent />

  );
}

export default App;