import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="w-64 h-full bg-[#d1a054]">
                <ul className="menu">
                <li><NavLink to='/dashboard/cart'>My Cart</NavLink></li>

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;