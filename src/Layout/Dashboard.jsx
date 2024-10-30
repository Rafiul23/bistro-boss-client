import { FaHome, FaList, FaShoppingCart, FaStar, FaEnvelope, FaUtensils, FaUsers, FaBook  } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {

  const {cart} = useCart();
  const isAdmin = true;

  return (
    <div className="flex md:flex-row flex-col gap-4">
      <div className="w-64 p-4 min-h-screen bg-[#d1a054]">
        <ul className="menu">
          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/adminHome">
            <FaHome></FaHome>
            Admin Home
            </NavLink>
          </li>
            <li>
            <NavLink to="/dashboard/addItems">
           <FaUtensils></FaUtensils>
            Add Items
            </NavLink>
          </li>
            <li>
            <NavLink to="/dashboard/manageItems">
           <FaList></FaList>
            Manage Items
            </NavLink>
          </li>
            <li>
            <NavLink to="/dashboard/manageBookings">
            <FaBook></FaBook>
            Manage Bookings
            </NavLink>
          </li>
            <li>
            <NavLink to="/dashboard/users">
           <FaUsers></FaUsers>
            All Users
            </NavLink>
          </li>
            
            </> : <>
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
            My Cart {cart?.length}
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
            <FaBook></FaBook>
            My Bookings
            </NavLink>
          </li>
            </>
          }
        <div className="divider"></div>
        <li>
            <NavLink to="/">
            <FaHome></FaHome>
            Home
            </NavLink>
          </li>
        <li>
            <NavLink to="/order/salad">
            <IoIosMenu></IoIosMenu> 
            Menu
            </NavLink>
          </li>
        <li>
            <NavLink to="/order/contact">
            <FaEnvelope />
            Contact
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
