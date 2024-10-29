import { FaHome, FaList, FaShoppingCart, FaStar } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="w-64 p-4 min-h-full bg-[#d1a054]">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
            <FaHome></FaHome>
            User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
            <FaCalendarDays></FaCalendarDays>
            Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
            <FaShoppingCart></FaShoppingCart>
            My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
            <FaStar></FaStar>
            Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
            <FaList></FaList>
            My Booking
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
