import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to='/'
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-500 font-bold" : "text-white"
          }
        >Home</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to='/dashboard'>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to='/menu'>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to='/shop'>Our Shop</NavLink>
      </li>
      <li>
        <NavLink className="btn" to='/login'>Login</NavLink>
      </li>

      
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="text-left font-semibold text-xl">Bistro Boss
            <br /> 
            R e s t a u r a n t
          </a>
        </div>
        
        <div className="navbar-end hidden lg:flex">
        <ul className="flex items-center gap-4 px-1">
          {navItems}
          
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
