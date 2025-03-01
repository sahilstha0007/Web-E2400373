import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Courses from './pages/Courses';
import AuthPage from './pages/auth/Login';

function AppContent() {
  const location = useLocation();
  const noNavbarRoutes = ['/auth', "/"];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && (
        <div className='sticky top-0 z-50 bg-[#AF8F6F]'>
          <Navbar />
        </div>
      )}
      
      <Routes>
        <Route path="/" />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
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