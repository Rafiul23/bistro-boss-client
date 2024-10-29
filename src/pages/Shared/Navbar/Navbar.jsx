import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-yellow-500 font-bold"
              : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-yellow-500 font-bold"
              : "text-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-yellow-500 font-bold"
              : "text-white"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-yellow-500 font-bold"
              : "text-white"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-yellow-500 font-bold"
              : "text-white"
          }
        >
          Order Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-yellow-500 font-bold"
              : "text-white"
          }
        >
          <button className="flex">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge ml-1 badge-secondary">+0</div>
          </button>
        </NavLink>
      </li>

      <li>
        {user ? (
          <button onClick={handleLogOut} className="btn" to="/login">
            Log Out
          </button>
        ) : (
          <NavLink className="btn" to="/login">
            Login
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-black text-white max-w-screen-xl fixed z-10 bg-opacity-30">
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
          <a className="text-left font-semibold text-xl">
            Bistro Boss
            <br />R e s t a u r a n t
          </a>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="flex items-center gap-4 px-1">{navItems}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
