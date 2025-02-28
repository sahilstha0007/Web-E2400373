import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Courses from './pages/Courses';

function App() {
  const noNavbarRoutes = ['/login', "/"];

  return (
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
