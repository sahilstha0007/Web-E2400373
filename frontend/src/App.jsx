import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import AuthPage from './pages/auth/Login';
import RouteProtection from './components/protected_Route/protection';
import { AuthContext } from './context/auth-context';
import { useContext } from 'react';
import InstructorDashboardpage from './pages/instructor';
import AddNewCoursePage from './pages/instructor/add-new-course';
import Affiliate from './pages/Affiliate';
import Landing from './pages/Landing';


function AppContent() {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  const noNavbarRoutes = [
    '/auth',
     "/instructor",
     "/instructor/create-new-course",
     "/instructor/edit-course/:courseId",
    "/"];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && (
        <div className='sticky top-0 z-50 bg-[#AF8F6F]'>
          <Navbar />
        </div>
      )}

      <Routes>
        {/* <Route
          path="/"
          element={
            <RouteProtection
              element={<Landing />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            /> */}

          {/* } */}
        {/* /> */}
        <Route
          path="/instructor"
          element={
            // <RouteGuard
            // element={

            <InstructorDashboardpage
            //  />}
            // authenticated={auth?.authenticate}
            // user={auth?.user}
            />
          }
        />

        <Route
          path="/instructor/create-new-course"
          element={
            // <RouteGuard
              // element={
              <AddNewCoursePage />
            // }
              // authenticated={auth?.authenticate}
              // user={auth?.user}
            // />
          }
        />
        <Route
        path="/instructor/edit-course/:courseId"
        // element={
          // <RouteGuard
            element={
            <AddNewCoursePage />
          // }
            // authenticated={auth?.authenticate}
            // user={auth?.user}
          // />
        }
      />
       <Route
          path="/home"
          element={
            <RouteProtection
              element={<Home />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            /> 

           } 
         />
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/affiliate" element={<Affiliate />} />
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