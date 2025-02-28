import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <Navbar className=" sticky top-0 left-0 bg-white"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TeamMember" element={<TeamMember />} />
          <Route path="/AboutTeam" element={<AboutTeam />} />
          <Route path="/Problems" element={<Problem />} />
          <Route path="/OurGoal" element={<Goal />} />
          <Route path="/Solution" element={<Solution />} />
        </Routes>
    </Router>
  )
}

export default App
