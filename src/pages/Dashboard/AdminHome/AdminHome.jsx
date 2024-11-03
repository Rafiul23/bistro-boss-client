import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaCarSide, FaDollarSign, FaUsers } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold">
        Hi! Welcome back {user?.displayName}
      </h2>
      <div className=" my-5 grid grid-cols-4 gap-4">
        <div className="stat bg-violet-400 text-white">
          <div className="stat-figure">
           <FaDollarSign className="text-3xl"></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats?.revenue}</div>
          
        </div>

        <div className="stat bg-pink-400 text-white">
          <div className="stat-figure">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.users}</div>
          
        </div>
        <div className="stat bg-amber-400 text-white">
          <div className="stat-figure">
            <FaBook className="text-3xl"></FaBook>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats?.menuItems}</div>
          
        </div>

        <div className="stat bg-cyan-400 text-white">
          <div className="stat-figure">
            <FaCarSide className="text-3xl"></FaCarSide>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
