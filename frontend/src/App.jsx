import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import AuthPage from './pages/auth/Login';
import Affiliate from './pages/Affiliate';
import Landing from './pages/Landing';

function AppContent() {
  const location = useLocation();
  
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const noNavbarRoutes = ['/auth', "/"];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && (
        <div className='sticky top-0 z-50 bg-[#AF8F6F]'>
          <Navbar />
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Landing /> : <Navigate to="/auth" />}
        />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/auth" />} />
        <Route path="/affiliate" element={isLoggedIn ? <Affiliate /> : <Navigate to="/auth" />} />
        <Route path="/courses" element={isLoggedIn ? <Courses /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={!isLoggedIn ? <AuthPage /> : <Navigate to="/" />} />
      </Routes>
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
