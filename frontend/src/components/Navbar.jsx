import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header flex px-8 py-4">
      <div className="w-36 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">MVIC</p>
      </div>

      <nav className="flex gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-500 font-semibold' : 'text-black hover:text-blue-500'}
        >
          Home
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? 'text-blue-500 font-semibold' : 'text-black hover:text-blue-500'}
        >
         Login
        </NavLink>
        <NavLink
          to="/Login"
          className={({ isActive }) =>
            isActive ? 'text-blue-500 font-semibold' : 'text-black hover:text-blue-500'}
        >
          About Team
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;